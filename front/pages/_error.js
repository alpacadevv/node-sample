// 에러가 발생하면 이 페이지가 실행 됨
import React from 'react';
import Error from 'next/error';
import PropTypes from 'prop-types';

const MyError = ({ statusCode }) => {
  return (
    <div>
      <h1>{statusCode} 에러 발생</h1>
      <Error statusCode={statusCode} />
    </div>
  );
};

MyError.propTypes = {
  statusCode: PropTypes.number,
};

// 기본으로 400넣어주기
MyError.defaultProps = {
  statusCode: 400,
};

// props를 직접 넣어주는 과정
MyError.getInitialProps = async (context) => {
  // 서버면 context.res가 있음
  // 서버가 아니면 context.err 가 있으면
  const statusCode = context.res ? context.res.statusCode : context.err ? context.err.statusCode : null;
  return { statusCode };
};

export default MyError;
