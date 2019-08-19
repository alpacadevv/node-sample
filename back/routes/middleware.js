exports.isLoggedIn = (req, res, next) => {
  // 로그인 했는지 판단할때 express passport에서 쓰는게있는데 req.isAuthenticated()임
  // if (req.user)로 안하고 아래처럼 하자
  if (req.isAuthenticated()) {
    next(); // 에러를 넣으면 에러처리 미들웨어, 에러를 안넣으면 다음 미들웨어로 넘어감.
  } else {
    res.status(401).send('로그인이 필요합니다');
  }
};

exports.isNotLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    next();
  } else {
    res.status(401).send('로그인한 사용자는 접근할 수 없습니다.');
  }
};
