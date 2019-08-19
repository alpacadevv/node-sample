const passport = require('passport');
const db = require('../models');
const local = require('./local');

// 프론트에서 쿠키 보내면 서버쪽은 메모리 검사해서 쿠키와 연관된 아이디 찾고
// 아이디뿐이니까 그 id로 사용자를 조회해서 원래 데이터를 찾음
module.exports = () => {
  // 서버쪽에 [{ id: 3, cookie: 'asdfgh }] 이런식으로 저장해 둠(서버쪽 메모리 부하를 방지)
  // 프론트쪽에서 서버로 쿠키(asdfgh)를 보내오면 아 이 쿠키가 id:3번이랑 연결되있구나 하고 판단
  // 그래서 디비에서 조회함
  // serializeUser가 사용자 정보가 너무 많으니까 [{ id: 3, cookie: 'asdfgh }]같은 정보를 
  // 서버에 저장하는 역할을 함
  passport.serializeUser((user, done) => {
    return done(null, user.id);
  });

  // deserializeUser는 serializeUser와 반대로 id를 가지고 원래 정보를 되찾는것
  passport.deserializeUser(async (id, done) => {
    try {
      const user = await db.User.findOne({
        where: { id },
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
      });
      return done(null, user); // 불러온 정보는 request.user에 저장됨
    } catch (e) {
      console.error(e);
      return done(e);
    }
  });

  local();
};

// 프론트 -> 서버 : cookie만 보낸다. ex) asdfgh
// 서버가 쿠키 파서, 익스프레스 세션으로 쿠키 검사 후  id:3 발견
// id:3이 deserializeUser에 들어감
// id로 조회한 사용자 정보가 들어감

// 요청 보낼때마다 deserializeUser가 실행됨
// 실무에서는 deserializeUser 결과물 캐싱해놈 왜냐면 안그럼 매번 디비 요청하니까.