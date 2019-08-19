import React from 'react';
import { useSelector } from 'react-redux';
import Router from 'next/router'; // 프로그래밍적으로 이동하는 방법
import Link from 'next/link'; // 컴포넌트적으로 이동하는 방법
import PropTypes from 'prop-types';
import { Menu, Input, Row, Col } from 'antd';
import LoginForm from '../containers/LoginForm';
import UserProfile from '../containers/UserProfile';

const AppLayout = ({ children }) => {
  const { me } = useSelector(state => state.user);

  const onSearch = (value) => {
    Router.push(
      {
        pathname: '/hashtag',
        query: { tag: value },
      }, // 내부적으로 접근하는 주소 (server.js에서 동적라우팅할떄도 이런 개념임)
      `/hashtag/${value}`, // 실제로 눈으로 보이는 보일 주소
    );
  };

  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item key="home"><Link href="/"><a>NodeBird</a></Link></Menu.Item>
        {/* Next의 Link에 prefetch를 붙여주면 페이지 불러올때 /profile도 같이 불러옴 */}
        {/* Next로 인해 코드 스플리팅이 되어있기때문에 안그러면 /profile 접속하면 profile 페이지를 따로 불러와서 느림 */}
        {/* 근데 너무 남용하면 코드스플리팅 된 이유가 없어져서 너무 남발 ㄴㄴ */}
        {/* prefetch는 개발환경에서는 효과를 볼 수 없고 배포환경에서만 볼 수 있음 */}
        <Menu.Item key="profile"><Link href="/profile" prefetch><a>Profile</a></Link></Menu.Item>
        <Menu.Item key="mail">
          <Input.Search
            enterButton
            style={{ verticalAlign: 'middle' }}
            onSearch={onSearch}
          />
        </Menu.Item>
      </Menu>
      <Row gutter={10}>
        <Col xs={24} md={6}>
          { me
            ? <UserProfile />
            : <LoginForm />
          }
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          <Link href="https://jinseoplee.github.io/portfolio/"><a target="_blank">Made by Alpaca</a></Link>
        </Col>
      </Row>
    </div>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
