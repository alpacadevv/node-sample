import React from 'react';
import Document, { Main, NextScript } from 'next/document';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

// 스타일드 컴포넌트도 서버사이드 렌더링을 해줘야함
import { ServerStyleSheet } from 'styled-components';

/**
 * _document.js는 html, head, body를 담당한다
 * _document.js는 아직 hooks로 지원이 안되서 클래스로 개발해야함(Document객체를 사용해야하기 때문)
 * Main이 _app.js임
 * NextScript 는 next서버 구동에 필요한 스크립트들을 모아둔거임
 */
class MyDocument extends Document {
  static getInitialProps(context) {
    const sheet = new ServerStyleSheet();
    // _app.js 렌더 왜냐하면 _document.js의 아래이기 때문
    const page = context.renderPage(App => props => sheet.collectStyles(<App {...props} />));
    const styleTags = sheet.getStyleElement();
    // Helmet.renderStatic을 해주면 서버사이드 렌더링이 됨
    return { ...page, helmet: Helmet.renderStatic(), styleTags };
  }

  renter() {
    // getInitialProps해주면 props에 헬멧이 있음
    // htmlAttributes : html에 속성들을 제공 ex) lang='ko'
    // bodyAttributes : body 속성들 제공
    // helmet : 메타태그나 스크립트 링크태그등 스타일 등등 제공
    const { htmlAttributes, bodyAttributes, styleTags, ...helmet } = this.props.helmet;
    const htmlAttrs = htmlAttributes.toComponent();
    const bodyAttrs = bodyAttributes.toComponent();
    console.log('~~helmet~~');
    console.log(helmet);

    return (
      <html {...htmlAttrs}>
        <head>
          {styleTags}
          {Object.values(helmet).map(el => el.toComponent())}
        </head>
        <body {...bodyAttrs}>
          <Main />
          {process.env.NODE_ENV === 'production' && <script src="https://polyfill.io/v3/polyfill.min.js?features=es6,es7,es8,es9,NodeList.prototyoe.forEach&flags=gated" />}
          <NextScript />
        </body>
      </html>
    );
  }
}

MyDocument.propTypes = {
  helmet: PropTypes.object.isRequired,
  styleTags: PropTypes.object.isRequired,
};

export default MyDocument;
