// folder 이름이 pages인 이유 : next는 라우터 기능의 Link를 쓸때 페이지의 주소체게를 잡는데 pages폴더가 root로 잡힌다
import React, { useEffect, useCallback, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PostForm from '../containers/PostForm';
import PostCard from '../containers/PostCard';
import { LOAD_MAIN_POSTS_REQUEST } from '../reducers/post';

const Home = () => {
  const dispatch = useDispatch();
  const { me } = useSelector(state => state.user);
  const { mainPosts, hasMorePost } = useSelector(state => state.post);
  const countRef = useRef([]);

  const onScroll = useCallback(() => {
    // console.log(
    //   window.scrollY, // 현재 스크롤 좌표(스크롤을 맨 위에서부터 얼만큼 했는가)
    //   document.documentElement.clientHeight, // 제일 윗부분부터 제일아래까지(스크롤바 뺴고)
    //   document.documentElement.scrollHeight, // 총 스크롤 높이
    // );

    // 스크롤 다내리기 300정도 위에서 게시글 추가 조회
    if (window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 300) {
      // 팔로워 팔로잉 리스트와 다르게 offset을 못씀 왜냐면 포스트는 내가 읽어오는 도중에 누가 게시글을 추가로 쓸 수 있기 때문(팔로워 팔로잉도 offset 쓰면안댐 중간에 추가제거가 될 수 있기때문)
      // 그렇다면 마지막 게시글의 아이디를 가져와서 그 아이디보다 작은애들을 리밋하는 방법을 사용하자. 만약 아이디가 내림차순이나 오름차순이 아니다
      // 하면 생성일자 같은거를 사용해도됨. 결론은 순서가 있는 데이터를 사용하면됨
      if (hasMorePost) {
        const lastId = mainPosts[mainPosts.length - 1].id;
        if (!countRef.current.includes(lastId)) {
          dispatch({
            type: LOAD_MAIN_POSTS_REQUEST,
            lastId,
          });
          // lastId를 프론트에서 기록을 해두면 같은 lastId로 중복 요청보내는걸 막을 수 있음
          countRef.current.push(lastId);
          // saga의 throttle은 saga에서의 액션만 throttling 하는거지 리덕스 자체의 액션이 실행되는건 막을 수 없음
          // 리덕스 자체의 액션을 막아주려면 위처럼 프론트에서 해줘야함
        }
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
      {me && <PostForm />}
      {mainPosts.map(c => (
        <PostCard key={c.id} post={c} />
      ))}
    </div>
  );
};

Home.getInitialProps = async (context) => {
  console.log(Object.keys(context));
  context.store.dispatch({
    type: LOAD_MAIN_POSTS_REQUEST,
  });
};

export default Home;
