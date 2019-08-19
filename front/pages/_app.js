import React from 'react';
import PropTypes from 'prop-types';
import withRedux from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import axios from 'axios';
import Helmet from 'react-helmet';
import App, { Container } from 'next/app';
import { LOAD_USER_REQUEST } from '../reducers/user';
import AppLayout from '../components/AppLayout';
import reducer from '../reducers';
import rootSaga from '../sagas';

/**
 * 원래 document, error, app등은 App을 extends한 클래스로 만들어줘야한다.;
 * 공식문서에선 extends하라는데 안해도 문제가 없다고함;
 */
// class NodeBird extends App {
//   static getInitialProps(context) {

//   }
//   return() {

//   }
// }

/**
 * _app.js는 next에서 최상위 부모 컴포넌트 역할을 한다.
 * index.js, profile.js 등등의 컴포넌트들이 모두 _app.js를 부모로 갖는다.
 * Props인 Component는 next에서 일반 컴포넌트들을 prop으로 보내준다.
 * @param {*} param0
 */
const NodeBird = ({ Component, store, pageProps }) => {
  return (
    <Container>
      <Provider store={store}>
        <Helmet
          title="NodeBird"
          htmlAttributes={{ lang: 'ko' }}
          meta={[
            {
              charset: 'UTF-8',
            },
            {
              name: 'viewport',
              content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=yes,viewport-fit=cover',
            },
            {
              'http-equiv': 'X-UA-Compatible',
              content: 'IE=edge',
            },
            {
              name: 'description',
              content: '노드벌드~',
            },
            {
              name: 'og:title', content: 'nodebird sns',
            },
            {
              name: 'og:description', content: 'nodebird sns',
            },
            {
              property: 'og:type',
              content: 'website',
            },
            {
              // 이건 이미지가 없을때를 대비한 기본이미지 설정
              property: 'og:image',
              content: 'http://localhost:3060/favicon.ico',
            },
          ]}
          link={[
            {
              rel: 'shortcut icon', href: '/favicon.ico',
            },
            {
              rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/antd/3.19.8/antd.css',
            },
            {
              rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css',
            },
            {
              rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css',
            },
          ]}
          script={[
            {
              src: 'https://cdnjs.cloudflare.com/ajax/libs/antd/3.19.8/antd.js',
            },
          ]}
        />
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </Provider>
    </Container>
  );
};

NodeBird.propTypes = {
  Component: PropTypes.elementType.isRequired,
  store: PropTypes.object.isRequired,
  pageProps: PropTypes.object.isRequired,
};

// next에서 제공하는 getInitialProps를 쓰려면 _app.js에서 아래처럼 해줘야함
// _app.js의 context는 next에서 내려주는거임.
// context.ctx는 _app.js에서 다른 컴포넌트들로 내려주는거임
// Component들에 getInitialProps가 있을 경우 실행을 시켜주는역할을 함.
NodeBird.getInitialProps = async (context) => {
  const { ctx, Component } = context;
  let pageProps = {};

  // getInitialProps는 pages 에만 써야하기 때문에 AppLayout에 안쓰고 여기다 써줌
  // 내 정보를 가져온 다음에 Component.getInitialProps를 실행 해줘야 각 컴포넌트의
  // getInitialProps에서 실행되는 dispatch나 그런것들보다 LOAD_USER_REQUEST가
  // 먼저 실행된다. 그래서 쿠키가 제대로 첨부가 안댐.
  // 우리는 front, back 이렇게 두개의 서버가 있다.
  // 지금까지는 SSR 적용 안됬을땐 클라이언트라고 했을 때 프론트에서 백으로 요청하면 백에서  프론트로 주는 형식이었는데
  // 이제는 프론트 서버를 통해서 서버사이드 렌더링을 한다.
  // (클라이언트에서 axios 쏠때 브라우저가 쿠키 같이 동봉해줬음, 이제는 클라이언트가 axios 쏘는게아니라 프론트 서버가 함)
  // (서버사이드 렌더링 할때는 브라우저가 없음... 그래서 쿠키 자동으로 넣어주는애가 없음, 그래서 직접 넣어줘야함)
  const state = ctx.store.getState();

  // ctx 안에 req와 res가 있는데 이게 서버환경일때만 있음, 클라이언트 환경일땐 undefined일꺼임
  const cookie = ctx.isServer ? ctx.req.headers.cookie : '';

  // 클라이언트일땐 브라우저가 쿠키를 알아서 넣어준댔는데 클라이언트일땐 이걸 실행해줄 필요가 없으니까
  // 서버와 클라이언트 구분지어주면 좋음
  if (ctx.isServer) {
    // 쿠키 직접 넣어주는 현장
    axios.defaults.headers.Cookie = cookie;
  }
  if (!state.user.me) {
    ctx.store.dispatch({
      type: LOAD_USER_REQUEST,
    });
  }
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx) || {};
  }
  return { pageProps };
};

const configureStore = (initialState, options) => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware, (store) => (next) => (action) => {
    // 커스텀 미들웨어는 3단 커링함수임
    // 리덕스 사가 에러 찾는데 용이함
    // console.log(action);
    next(action);
  }];
  const enhancer = process.env.NODE_ENV === 'production'
    ? compose(applyMiddleware(...middlewares))
    : compose(
      applyMiddleware(...middlewares),
      !options.isServer && typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
    );
  const store = createStore(reducer, initialState, enhancer);
  // withReduxSaga 사용하려면 saga 미들위어 런 한걸 이렇게 넣어줘야함
  store.sagaTask = sagaMiddleware.run(rootSaga);
  return store;
};

// withReduxSaga 이게 있어야 next 서버에서 리덕스 사가를 돌릴수 있음
export default withRedux(configureStore)(withReduxSaga(NodeBird));
