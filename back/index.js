const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const dotenv = require('dotenv');
const passport = require('passport');
const passportConfig = require('./passport');

const db = require('./models');
const userAPIRouter = require('./routes/user');
const postAPIRouter = require('./routes/post');
const postsAPIRouter = require('./routes/posts');
const hashtagAPIRouter = require('./routes/hashtag');

dotenv.config(); // 실행, 그럼 process.env.COOKIE_SECRET처럼 사용가능

const app = express();
db.sequelize.sync(); // 이거 하면 알아서 테이블들 다 생성해줌 
// mysql 쓰려면 mysql2라는 패키지 설치해줘야함 npm으로.
// 그리고 기본적으로 mysql이 설치되어있어야함

passportConfig();

// app.use는 미들웨어인데 요청과 응답 사이에 쓸 수 있음

// 요청에 대한 로그남기는거
app.use(morgan('dev'));

// 경로를 지정해주면 그안에 들어있는 파일을 다른서버에서 자유롭게 가져갈 수 있게 해주는 역할을 함
// '/' <= 이걸 적어주면 서버쪽 uploads 폴더를 루트폴더처럼 쓸수있게 해주겠다는거임
app.use('/', express.static('uploads'));

// 아래 두 설정을 해줘야 req.body를 정상적으로 처리가능
// json 형식의 본문을 처리하는 부분
app.use(express.json());
// form으로 넘어온 데이터를 처리하는 부분
app.use(express.urlencoded({ extended: true }));

app.use(cors({
  origin: true,
  credentials: true,
})); // cors 문제를 해결
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(expressSession({
  resave: false, // 매번 새션 강제 저장
  saveUninitialized: false, // 빈 값도 저장
  secret: process.env.COOKIE_SECRET, // 쿠키에 대한 암호화 키
  cookie: {
    httpOnly: true, // javascript로 쿠키에 접근 불가능하게 함
    secure: false, // https를 쓸때 true로 해주면됨
  },
  name: 'rnbck', // 클라이언트에 생성되는 쿠키 네임 설정
}));
app.use(passport.initialize());
// passport session은 항상 express session 보다 아래에 적어줘여함
// 왜냐면 passport session이 express session을 내부적으로 사용하기 때문
app.use(passport.session());

// 로컬호스트:listen port 뒤에 붙는 주소(받을 요청)
// 웹사이트 접속하는 것 자체도 get 요청이다
// https는 도메인 주소뒤에 443이 숨겨져있다고 보면되고, http는 80이 숨겨져있다고 보면된다.
// ex) https://www.naver.com:443

// Controller
app.use('/api/user', userAPIRouter);
app.use('/api/post', postAPIRouter);
app.use('/api/posts', postsAPIRouter);
app.use('/api/hashtag', hashtagAPIRouter);

app.listen(3065, () => {
  console.log('server is running on localhost:3065');
});
