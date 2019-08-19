import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NicknameEditForm from '../containers/NicknameEditForm';
import { UNFOLLOW_USER_REQUEST, REMOVE_FOLLOWER_REQUEST, LOAD_FOLLOWERS_REQUEST, LOAD_FOLLOWINGS_REQUEST } from '../reducers/user';
import PostCard from '../containers/PostCard';
import { LOAD_USER_POSTS_REQUEST } from '../reducers/post';
import FollowerList from '../components/FollowerList';

const Profile = () => {
  const dispatch = useDispatch();
  const { followingList, followerList, hasMoreFollower, hasMoreFollowing } = useSelector(state => state.user);
  const { mainPosts } = useSelector(state => state.post);

  const onUnfollow = useCallback(userId => () => {
    dispatch({
      type: UNFOLLOW_USER_REQUEST,
      data: userId,
    });
  }, []);

  const onRemoveFollower = useCallback(userId => () => {
    dispatch({
      type: REMOVE_FOLLOWER_REQUEST,
      data: userId,
    });
  }, []);

  const loadMoreFollowing = useCallback(() => {
    dispatch({
      type: LOAD_FOLLOWINGS_REQUEST,
      offset: followingList.length,
    });
  }, [followingList.length]);

  const loadMoreFollower = useCallback(() => {
    dispatch({
      type: LOAD_FOLLOWERS_REQUEST,
      offset: followerList.length,
    });
  }, [followerList.length]);

  return (
    <div style={{ margin: '10px 0 20px' }}>
      <NicknameEditForm />
      <FollowerList
        header="Following list"
        hasMore={hasMoreFollowing}
        onClickMore={loadMoreFollowing}
        data={followingList}
        onClickStop={onUnfollow}
      />
      <FollowerList
        header="Follower list"
        hasMore={hasMoreFollower}
        onClickMore={loadMoreFollower}
        data={followerList}
        onClickStop={onRemoveFollower}
      />
      <div>
        {mainPosts.map(c => (
          <PostCard key={+c.createAt} post={c} />
        ))}
      </div>
    </div>
  );
};

Profile.getInitialProps = async (context) => {
  const state = context.store.getState();
  const { dispatch } = context.store;
  // 이 직전에 _app.js에서 LOAD_USER_REQUEST 하는데 문제는
  // LOAD_USER_REQUEST 작업이 끝나야 state.user.me가 생김
  // LOAD_USER_REQUEST 작업이 끝나고 아래 세개를 작업하는 방법이 있는데 너무 느려짐
  // 방법은 me가 null이면 그걸 나로 치는것이다. 내가 액션 보낸거라고 친다.(숫자 0을 내 아이디로친다.)
  // user saga의 loadFollowersAPI, loadFollowingsAPI, post saga의 loadUserPostsAPI
  // 에서 파라미터가 null일텐데 null일때 0으로 initialize 해준다
  // 그리고 서버쪽에서는 id가 0이면 내 정보겠구나 하게 처리하면됨
  dispatch({
    type: LOAD_FOLLOWERS_REQUEST,
    data: state.user.me && state.user.me.id,
  });
  dispatch({
    type: LOAD_FOLLOWINGS_REQUEST,
    data: state.user.me && state.user.me.id,
  });
  dispatch({
    type: LOAD_USER_POSTS_REQUEST,
    data: state.user.me && state.user.me.id,
  });

  // 이 쯤에서 LOAD_USER_SUCCESS 돼서 me가 생김
};

export default Profile;
