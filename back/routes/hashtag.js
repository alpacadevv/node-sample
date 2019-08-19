const express = require('express');
const db = require('../models');

const router = express.Router();

router.get('/:tag', async (req, res, next) => {
  try {
    let where = {};
    if (parseInt(req.query.lastId, 10)) {
      where = {
        id: {
          [db.Sequelize.Op.lt]: parseInt(req.query.lastId, 10),
        },
      };
    }
    const posts = await db.Post.findAll({
      where,
      // posts에 연관된걸 찾는거면 where절이 여기 들어가겠지만 
      include: [{
        model: db.Hashtag,
        // hashtag 테이블에 연관된걸 찾는거라 where절이 여기들어감
        where: {
          // 한글, 특수문자 이런애들은 주소를 통해 서버로 갈때 URI컴포넌트로 인코딩되서
          // 서버쪽에서 처리하려면 다시 제대로 디코딩 해줘야함
          name: decodeURIComponent(req.params.tag),
        },
      }, {
        model: db.User,
        attributes: ['id', 'nickname'],
      }, {
        model: db.Image,
      }, {
        model: db.User,
        through: 'Like',
        as: 'Likers',
        attributes: ['id'],
      }, {
        model: db.Post,
        as: 'Retweet',
        include: [{
          model: db.User,
          attributes: ['id', 'nickname'],
        }, {
          model: db.Image,
        }]
      }],
      order: [['createdAt', 'DESC']],
      limit: parseInt(req.query.limit, 10),
    });
    res.json(posts);
  } catch (e) {
    console.error(e);
    next(e);
  }
});

module.exports = router;
