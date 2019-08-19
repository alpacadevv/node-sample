const express = require('express');
const bcrypt = require('bcrypt');
const db = require('../models');
const passport = require('passport');
const router = express.Router();
const { isLoggedIn } = require('./middleware');

router.get('/', isLoggedIn, (req, res) => {
  const user = Object.assign({}, req.user.toJSON());
  console.log('~~~!!!!!~~~~');
  console.log(user);
  delete user.password
  return res.json(user);
});

// 회원가입
router.post('/', async (req, res, next) => {
  try {
    const exUser = await db.User.findOne({
      where: {
        userId: req.body.userId,
      }
    });
    if (exUser) {
      return res.status(403).send('이미 사용중인 아이디입니다.');
    }

    // salt는 10~13 사이로 많이함
    const hashedPassword = await bcrypt.hash(req.body.password, 12);
    const newUser = await db.User.create({
      nickname: req.body.nickname,
      userId: req.body.userId,
      password: hashedPassword,
    });
    console.log(newUser);
    return res.status(200).json(newUser);
  } catch (e) {
    console.error(e);
    // 에러처리를 하려면 여기서하고 최후의 수단으로 next으로 에러 넘기자
    // next로 에러 넘기면 프론트로 바로넘어감
    return next(e);
  }
});

router.get('/:id', async (req, res, next) => { // 남의 정보 가져오는 것
  try {
    const user = await db.User.findOne({
      where: { id: parseInt(req.params.id, 10) },
      include: [{
        model: db.Post,
        as: 'Posts',
        attributes: ['id'],
      }, {
        model: db.User,
        as: 'Followings',
        attributes: ['id'],
      }, {
        model: db.User,
        as: 'Followers',
        attributes: ['id'],
      }],
      attributes: ['id', 'nickname'],
    });
    const jsonUser = user.toJSON();
    jsonUser.Posts = jsonUser.Posts ? jsonUser.Posts.length : 0;
    jsonUser.Followings = jsonUser.Followings ? jsonUser.Followings.length : 0;
    jsonUser.Followers = jsonUser.Followers ? jsonUser.Followers.length : 0;
    return res.json(jsonUser);
  } catch (e) {
    console.error(e);
    return next(e);
  }
});

router.post('/logout', (req, res) => {
  req.logout();
  req.session.destroy();
  res.send('logout success!');
});

router.post('/login', (req, res, next) => {
  // (err, user, info)는 passport-local 설정한거에서 done에서 넘어온거
  passport.authenticate('local', (err, user, info) => {
    // 서버 에러
    if (err) {
      console.error(err);
      return next(err);
    }
    // 로직상의 에러
    if (info) {
      return res.status(401).send(info.reason);
    }

    // 이 로그인을 하면 서버쪽에 세션과 쿠키도 저장이 됨
    // req.login 할 때 serializeUser가 실행됨
    return req.login(user, async (loginError) => {
      try {
        if (loginError) {
          return next(loginError);
        }
        const fullUser = await db.User.findOne({
          where: { id: user.id },
          include: [
            {
              model: db.Post,
              as: 'Posts',
              attributes: ['id'],
            },
            {
              model: db.User,
              as: 'Followings',
              attributes: ['id'],
            },
            {
              model: db.User,
              as: 'Followers',
              attributes: ['id'],
            },
          ],
          attributes: ['id', 'nickname', 'userId'],
        });
        // 시퀼라이즈유저실행 끝나고 로그인성공하면 req.user가 생성됨
        // 그럼 앞으로 라우터에서 req.user 사용 가능
        console.log('login success ', fullUser);
        return res.json(fullUser);
      } catch (e) {
        console.error(e);
        return next(e);
      }
    });
  })(req, res, next);
});

router.get('/:id/follow', (req, res) => {

});

router.post('/:id/follow', isLoggedIn, async (req, res, next) => {
  try {
    const me = await db.User.findOne({
      where: { id: req.user.id },
    });
    // req.user.addFollowing해도 되긴하는데 가끔 req.user가 시퀄라이즈 객체가 아닌 일반객체가 될때가 있음
    // 그래서 재 조회함
    await me.addFollowing(req.params.id);
    res.send(req.params.id);
  } catch (e) {
    console.error(e);
    next(e);
  }
});

// 나를 팔로워 하는 사람들
router.get('/:id/followers', isLoggedIn, async (req, res, next) => {
  try {
    const user = await db.User.findOne({
      where: { id: parseInt(req.params.id, 10) || (req.user && req.user.id) || 0 },
    });
    const followers = await user.getFollowers({
      attributes: ['id', 'nickname'],
      limit: parseInt(req.query.limit, 10),
      offset: parseInt(req.query.offset, 10),
    });
    res.json(followers);
  } catch (e) {
    console.error(e);
    next(e);
  }
});

// 내가 팔로윙 하는 사람들
router.get('/:id/followings', isLoggedIn, async (req, res, next) => {
  try {
    const user = await db.User.findOne({
      where: { id: parseInt(req.params.id, 10) || (req.user && req.user.id) || 0 },
    });
    const followings = await user.getFollowings({
      attributes: ['id', 'nickname'],
      limit: parseInt(req.query.limit, 10),
      offset: parseInt(req.query.offset, 10),
    });
    res.json(followings);
  } catch (e) {
    console.error(e);
    next(e);
  }
});

router.delete('/:id/follower', isLoggedIn, async (req, res, next) => {
  try {
    const me = await db.User.findOne({
      where: { id: req.user.id },
    });
    await me.removeFollower(req.params.id);
    res.send(req.params.id);
  } catch (e) {
    console.error(e);
    next(e);
  }
});

router.delete('/:id/follow', isLoggedIn, async (req, res, next) => {
  try {
    const me = await db.User.findOne({
      where: { id: req.user.id },
    });
    await me.removeFollowing(req.params.id);
    res.send(req.params.id);
  } catch (e) {
    console.error(e);
    next(e);
  }
});

router.get('/:id/posts', async (req, res, next) => {
  try {
    const posts = await db.Post.findAll({
      where: {
        UserId: parseInt(req.params.id, 10) || (req.user && req.user.id) || 0,
        RetweetId: null,
      },
      include: [{
        model: db.User,
        attributes: ['id', 'nickname'],
      }, {
        model: db.Image,
      }, {
        model: db.User,
        through: 'Like',
        as: 'Likers',
        attributes: ['id'],
      }],
    });
    return res.json(posts);
  } catch (e) {
    console.error(e);
    return next(e);
  }
});

router.patch('/nickname', isLoggedIn, async (req, res, next) => {
  try {
    await db.User.update({
      nickname: req.body.nickname,
    }, {
      where: { id: req.user.id },
    });
    res.send(req.body.nickname);
  } catch (e) {
    console.error(e);
    next(e);
  }
})

module.exports = router;
