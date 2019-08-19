import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card, Avatar, Button } from 'antd';
import Link from 'next/link';
import { LOG_OUT_REQUEST } from '../reducers/user';

const UserProfile = () => {
  const dispatch = useDispatch();
  const { me } = useSelector(state => state.user);

  const onLogout = useCallback(() => {
    dispatch({
      type: LOG_OUT_REQUEST,
    });
  }, []);

  return (
    <Card
      actions={[
        <Link href="/profile" key="twit" prefetch>
          <a>
            <div>
              twit
              <br />
              {me.Posts.length}
            </div>
          </a>
        </Link>,
        <Link href="/profile" key="following" prefetch>
          <a>
            <div>
              following
              <br />
              {me.Followings.length}
            </div>
          </a>
        </Link>,
        <Link href="/profile" key="follower" prefetch>
          <a>
            <div>
              follower
              <br />
              {me.Followers.length}
            </div>
          </a>
        </Link>,
      ]}
    >
      <Card.Meta
        avatar={<Avatar>{me.nickname[0]}</Avatar>}
        title={me.nickname}
      />
      <Button onClick={onLogout}>Log out</Button>
    </Card>
  );
};

export default UserProfile;
