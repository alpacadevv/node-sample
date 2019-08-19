const express = require('express');
const multer = require('multer');
const path = require('path');
const db = require('../models');
const { isLoggedIn } = require('./middleware');

const router = express.Router();

const upload = multer({
  // 서버쪽 하드디스크나 ssd에 저장하겠다는 의미
  storage: multer.diskStorage({
    // 파일이 저장될 위치
    // S3, 구글 클라우드 스토리지 이런걸로 바꿔줄수있음 그럼 거기 저장됨
    destination(req, file, done) {
      done(null, 'uploads'); // 어떤 경로에 저장할지 설정
    },
    // 저장될 파일명
    filename(req, file, done) {
      // alpaca.png => ext: .png, basename: alpaca
      const ext = path.extname(file.originalname);
      const basename = path.basename(file.originalname, ext);
      done(null, basename + new Date().valueOf() + ext);
    },
  }),
  // file size 제한 : 20메가정도로 제한함, 이것 외에도 파일 갯수 가튼거 제한 가능
  limits: { fileSize: 20 * 1024 * 1024 },
});

// 게시글 작성
// 게시글 작성 api로는 front에서 이미지가 넘어오는게 아니라 이미지 주소가 넘어오기때문에
// multer에서 이미지 처리 할 게 없다. 그럴때 none()을 사용하는것.
// 멀터가 아래처럼 해줌
// 폼데이터 파일 -> req.file(s)로 감
// 폼데이터 일반 값 -> req.body로 감
router.post('/', isLoggedIn, upload.none(), async (req, res, next) => {
  try {
    const hashtags = req.body.content.match(/#[^\s]+/g);
    const newPost = await db.Post.create({
      content: req.body.content, // ex) 알파카 파이팅 #알파카 #헬로우
      UserId: req.user.id,
    });
    if (hashtags) {
      const result = await Promise.all(hashtags.map(tag => db.Hashtag.findOrCreate({
        where: {
          name: tag.slice(1).toLowerCase(),
        },
      })));
      await newPost.addHashtags(result.map(r => r[0]));
    }
    // 이미지 파일이 아닌 주소(문자열)만 있어서 multer가 이렇게 body로 넣어주셨다.
    if (req.body.image) { // 이미지 주소를 여러개 올리면 image: [주소1, 주소2]
      if (Array.isArray(req.body.image)) {
        // 이렇게하면 프로미스들 동시에 작업. Promise.all 짱!
        const images = await Promise.all(req.body.image.map((image) => {
          return db.Image.create({ src: image });
        }));
        await newPost.addImages(images);
      } else {// 이미지를 하나만 올리면 image: 주소1
        const image = await db.Image.create({ src: req.body.image });
        await newPost.addImage(image);
      }
    }
    // const User = await = newPost.getUser();
    // newPost.User = User;
    // res.json(newPost);
    const fullPost = await db.Post.findOne({
      where: { id: newPost.id },
      include: [{
        model: db.User,
        attributes: ['id', 'nickname'],
      }, {
        model: db.Image, // 이제 이미지를 불러올수있다!
      }],
    });
    return res.json(fullPost);
  } catch (e) {
    console.error(e);
    return next(e);
  }
});

// form data 를 사용할때만 사용가능
// 이미지가 여러개일수있으니 array미들웨어 사용. 한장만 올린다 하면 single 사용
// fields라는것도 있는데 이건 form data append를 여러 이름으로 하면 사용
// ex) upload.fields([{name: 'image}, {name: 'img}])
// none이란것도 있는데 이미지나 파일같은거 하나도 안올린경우
// image라는 이름은 form data append했을때 이름이랑 같게 해줘야해서 사용
router.post('/images', upload.array('image'), (req, res) => {
  // 새로 form data라는걸 서버쪽에보냈는데 이건 body parser로처리 불가능
  // 요청 본문에 오긴하는데 안댐 그래서 multer라는 미들웨어 사용
  // 이미지 결과들은 single이면 file, array면 files에 저장됨
  console.log('##### req.files ######');
  console.log(req.files);
  res.json(req.files.map(v => v.filename));
});

router.get('/:id', async (req, res, next) => {
  try {
    const post = await db.Post.findOne({
      where: { id: req.params.id },
      include: [{
        model: db.User,
        attributes: ['id', 'nickname'],
      }, {
        model: db.Image,
      }],
    });
    res.json(post);
  } catch (e) {
    console.error(e);
    next(e);
  }
});

router.delete('/:id', isLoggedIn, async (req, res, next) => {
  try {
    const post = await db.Post.findOne({ where: { id: req.params.id } });
    if (!post) {
      return res.status(404).send('포스트가 존재하지 않습니다.');
    }
    await db.Post.destroy({ where: { id: req.params.id } });
    res.send(req.params.id);
  } catch (e) {
    console.error(e);
    next(e);
  }
});

router.get('/:id/comments', async (req, res, next) => {
  try {
    const post = await db.Post.findOne({ where: { id: req.params.id } });
    if (!post) {
      return res.status(404).send('포스트가 존재하지 않습니다.');
    }
    const comments = await db.Comment.findAll({
      where: {
        PostId: req.params.id,
      },
      order: [['createdAt', 'ASC']],
      include: [{
        model: db.User,
        attributes: ['id', 'nickname'],
      }],
    });
    return res.json(comments);
  } catch (e) {
    console.error(e);
    return next(e);
  }
});

router.post('/:id/comment', isLoggedIn, async (req, res, next) => {
  try {
    const post = await db.Post.findOne({ where: {id: req.params.id} });
    if (!post) {
      return res.status(404).send('포스트가 존재하지 않습니다.');
    }
    const newComment = await db.Comment.create({
      PostId: post.id,
      UserId: req.user.id,
      content: req.body.content,
    });
    // 게시글과 댓글을 id로 이어준다. 이건 시퀄라이즈에서 associate보고 만들어준 함수
    await post.addComment(newComment.id);
    // 댓글을 디비에서 재조회하는 이유는 include써주려고
    const comment = await db.Comment.findOne({
      where: {
        id: newComment.id,
      },
      include: [{
        model: db.User,
        attributes: ['id', 'nickname'],
      }],
    });
    return res.json(comment);
  } catch (e) {
    console.error(e);
    return next(e);
  }
});

// 좋아요 등록
router.post('/:id/like', isLoggedIn, async (req, res, next) => {
  try {
    const post = await db.Post.findOne({ where: { id: req.params.id } });
    if (!post) {
      return res.status(404).send('포스트가 존재하지 않습니다.');
    }
    await post.addLiker(req.user.id);
    return res.json({ userId: req.user.id });
  } catch (e) {
    console.error(e);
    return next(e);
  }
});

// 좋아요 취소
router.delete('/:id/like', isLoggedIn, async (req, res, next) => {
  try {
    const post = await db.Post.findOne({ where: { id: req.params.id }});
    if (!post) {
      return res.status(404).send('포스트가 존재하지 않습니다.');
    }
    await post.removeLiker(req.user.id);
    res.json({ userId: req.user.id });
  } catch (e) {
    console.error(e);
    next(e);
  }
});

router.post('/:id/retweet', isLoggedIn, async (req, res, next) => {
  try {
    const post = await db.Post.findOne({
      where: { id: req.params.id },
      include: [{
        model: db.Post,
        as: 'Retweet',
      }],
    });
    if (!post) {
      return res.status(404).send('포스트가 존재하지 않습니다.');
    }

    // 남이 이미 리트윗한거에 대한 검사도 해줘야 내 게시글을 다시 리트윗하지 않을 수 있게 됨
    if (req.user.id === post.UserId || (post.Retweet && post.Retweet.UserId === req.user.id)) {
      return res.status(403).send('자신의 글은 리트윗 할 수 없습니다.');
    }

    // 원본 게시글을 리트윗 할때랑 리트윗된 게시글을 다시 리트윗할때를 모두 처리해줘야함.
    const retweetTargetId = post.RetweetId || post.id;
    // 이미 리트윗 된건지 확인
    const exPost = await db.Post.findOne({
      where: {
        UserId: req.user.id,
        RetweetId: retweetTargetId,
      },
    });
    if (exPost) {
      return res.status(403).send('이미 리트윗 했습니다.');
    }
    const retweet = await db.Post.create({
      UserId: req.user.id,
      RetweetId: retweetTargetId,
      content: 'retweet', // post model에 content컬럼이 notnull이라 뭔가 꼭 넣어주긴해야함 그래서이거넣음
    });
    // 리트윗한 게시글에 남에 게시글 또 들어있어야되서 내 게시글 말고도 그안에있는 남에 게시글도 같이 가져와야함
    const retweetWithPrevPost = await db.Post.findOne({
      where: { id: retweet.id }, // 리트윗한 원본 게시글
      include: [{
        model: db.User,// 리트윗한 원본 게시글 사용자 정보
        attributes: ['id', 'nickname'],
      }, {
        model: db.Post, // 그걸 리트윗한 게시글들
        as: 'Retweet',
        include: [{
          model: db.User, // 사용자 정보
          attributes: ['id', 'nickname'],
        }, {
          model: db.Image, // 이미지 정보
        }],
      }],
    });
    res.json(retweetWithPrevPost);
  } catch (e) {
    console.error(e);
    next(e);
  }
})

module.exports = router;
