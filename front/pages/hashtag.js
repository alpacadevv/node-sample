import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { LOAD_HASHTAG_POSTS_REQUEST } from '../reducers/post';
import PostCard from '../containers/PostCard';

const Hashtag = ({ tag }) => {
  const dispatch = useDispatch();
  const { mainPosts, hasMorePost } = useSelector(state => state.post);

  const onScroll = useCallback(() => {
    // 스크롤 다내리기 300정도 위에서 게시글 추가 조회
    if (window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 300) {
      if (hasMorePost) {
        dispatch({
          type: LOAD_HASHTAG_POSTS_REQUEST,
          lastId: mainPosts[mainPosts.length - 1] && mainPosts[mainPosts.length - 1].id,
          data: tag,
        });
      }
    }
  }, [hasMorePost, mainPosts.length]);

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [mainPosts.length]);

  return (
    <div>
      {mainPosts.map(c => (
        <PostCard key={c.id} post={c} />
      ))}
    </div>
  );
};

Hashtag.propTypes = {
  tag: PropTypes.string.isRequired,
};

// 서버에서 내려준 tag내용이 들어있을거임
// _app.js에서 실행될거임
// getInitialProps은 next에서 제공하는 일종의 라이프사이클임
// componentDidMount보다도 먼저 실행됨 제일 먼저 실행됨
// 가장 최초의 작업을 할 수 있음. 서버쪽에서 해야하는 작업을 할 수 있음
// 프론트에서도 실행되고 서버에서도 실행됨, 서버사이드 렌더링할때 중요함
// 서버쪽에서 데이터를 미리 받아서 렌더링 해줄수있음.
Hashtag.getInitialProps = async (context) => {
  const { tag } = context.query;
  console.log('#######hashtag getInitialProps ::: ', tag);
  context.store.dispatch({
    type: LOAD_HASHTAG_POSTS_REQUEST,
    data: tag,
  });
  return { tag };
};

export default Hashtag;
