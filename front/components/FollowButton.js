import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import { Button } from 'antd';
import PropTypes from 'prop-types';

const FollowButton = memo(({ post, onUnfollow, onFollow }) => {
  const { me } = useSelector(state => state.user);
  return !me || post.User.id === me.id
    ? null
    : me.Followings && me.Followings.find(v => v.id === post.User.id)
      ? <Button onClick={onUnfollow(post.User.id)}>Unfollow</Button>
      : <Button onClick={onFollow(post.User.id)}>Follow</Button>;
});

FollowButton.propTypes = {
  post: PropTypes.object.isRequired,
  onUnfollow: PropTypes.func.isRequired,
  onFollow: PropTypes.func.isRequired,
};

export default FollowButton;
