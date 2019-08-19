import React from 'react';
import { useSelector } from 'react-redux';
import { Card, Avatar } from 'antd';
import { LOAD_USER_POSTS_REQUEST } from '../reducers/post';
import { LOAD_USER_REQUEST } from '../reducers/user';
import PostCard from '../containers/PostCard';

const User = () => {
  const { mainPosts } = useSelector(state => state.post);
  const { userInfo } = useSelector(state => state.user);

  return (
    <div>
      {userInfo
        ? (
          <Card
            actions={[
              <div key="twit">
                twit
                <br />
                {userInfo.Posts}
              </div>,
              <div key="following">
                following
                <br />
                {userInfo.Followings}
              </div>,
              <div key="follower">
                follower
                <br />
                {userInfo.Followers}
              </div>,
            ]}
          >
            <Card.Meta
              avatar={<Avatar>{userInfo.nickname[0]}</Avatar>}
              title={userInfo.nickname}
            />
          </Card>
        ) : null}
      {mainPosts.map(c => (
        <PostCard key={c.id} post={c} />
      ))}
    </div>
  );
};

User.getInitialProps = async (context) => {
  const id = parseInt(context.query.id, 10);
  console.log('user getInitialProps', id);

  context.store.dispatch({
    type: LOAD_USER_REQUEST,
    data: id,
  });
  context.store.dispatch({
    type: LOAD_USER_POSTS_REQUEST,
    data: id,
  });

  // 서버쪽(server.js)에서 받아 온 데이터를 User컴포넌트의 props로 넘겨줄 수 있다.
  // return {
  //   id: parseInt(context.query.id, 10),
  // };
};

export default User;
