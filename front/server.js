// next서버랑 express서버랑 동시에 돌아가는게 아니라 둘이 이어진다.
// 그럼 이제 서버 돌릴때 next로 시작하지 않고 nodemon으로 시작한다.
// 기존에 로그인한 상태로 새로고침 하면 리덕스 사가에서 요청헤서 데이터 가져온다.
// 그런데 그럼 처음에 화면 로딩시 잠깐 로그인 폼 보이고 그럼 근데 그게 엄청 거슬림
// 이걸 프론트쪽이 아니라 서버쪽에서 리덕스 사가 써서 데이터 불러오게 하면됨 이게 서버사이드 렌더링
// 그리고 넥스트만 써서는 라우팅시 동적인 라우팅이 안댐 그래서 익스프레스랑 연결한거임
const express = require('express');
const next = require('next');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const dotenv = require('dotenv');
const path = require('path');

const dev = process.env.NODE_ENV !== 'production';
const prod = process.env.NODE_ENV === 'production';

const app = next({ dev });
const handle = app.getRequestHandler();

dotenv.config();

app.prepare().then(() => {
  // express에선 다 app이었는데 next에서 app을 사용하니까 변수명 server로 함
  const server = express();

  server.use(morgan('dev'));
  // localhost:3060/favicon.ico로 접근가능
  server.use('/', express.static(path.join(__dirname, 'public')));
  server.use(express.json());
  server.use(express.urlencoded({ extended: true }));
  server.use(cookieParser(process.env.COOKIE_SECRET));
  server.use(expressSession({
    resave: false,
    saveUninitialized: false,
    secret: '',
    cookie: {
      httpOnly: true,
      secure: false,
    },
  }));

  server.get('/post/:id', (req, res) => {
    return app.render(req, res, '/post', {
      id: req.params.id,
    });
  });

  // /hashtag를 하면 pages 안에 hashtag.js 페이지가 있는데 실제로 우리가
  // 익스프레스를 사용해서 /hashtag 라는 주소와 hashtag.js 페이지와 연결을 해준다.
  // 그래서 /hashtag/:tag와 같은 파라미터가 페이지와 연결되서 동적이게 쓸 수 있다.
  // (next만으로는 이런게 안댐 동적인 주소 붙이는게 안댐)
  server.get('/hashtag/:tag', (req, res) => {
    return app.render(req, res, '/hashtag', {
      tag: req.params.tag,
    });
  });

  server.get('/user/:id', (req, res) => {
    return app.render(req, res, '/user', {
      id: req.params.id,
    });
  });

  // 모든 get 요청을 여기서 처리하겠다는 의미
  server.get('*', (req, res) => {
    // handle은 get 요청 처리기
    return handle(req, res);
  });

  server.listen(3060, () => {
    console.log('next+express running on port 3060');
  });
});
