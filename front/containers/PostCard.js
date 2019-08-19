import React, { useState, useCallback, memo } from 'react';
import { Card, Icon, Button, Avatar, List, Comment, Popover } from 'antd';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import moment from 'moment';
import { LOAD_COMMENTS_REQUEST, UNLIKE_POST_REQUEST, LIKE_POST_REQUEST, RETWEET_REQUEST, REMOVE_POST_REQUEST } from '../reducers/post';
import PostImages from '../components/PostImages';
import PostCardContent from '../components/PostCardContent';
import { FOLLOW_USER_REQUEST, UNFOLLOW_USER_REQUEST } from '../reducers/user';
import CommentForm from './CommentForm';
import FollowButton from '../components/FollowButton';

// 모멘트 한글 설정 할 수 있음 이렇게
moment.locale('ko');

const CardWrapper = styled.div`
  margin-bottom: 20px;
`;

// memo는 shallow compare만 해주기 때문에 props가 너무 깊은 객체면 안댐
// 리렌더링이 되야하는 상황인데 안될수가있음.. 근데 메모붙여도 안댐..
// 그럴땐 규모를 더 잘게 쪼개줘야함
const PostCard = memo(({ post }) => {
  const dispatch = useDispatch();
  const [commentFormOpened, setCommentFormOpened] = useState(false);
  const id = useSelector(state => state.user.me && state.user.me.id);
  const liked = id && post.Likers && post.Likers.find(v => v.id === id);

  const onToggleComment = useCallback(() => {
    setCommentFormOpened(prev => !prev);
    if (!commentFormOpened) {
      dispatch({
        type: LOAD_COMMENTS_REQUEST,
        data: post.id,
      });
    }
  }, []);

  const onToggleLike = useCallback(() => {
    if (!id) {
      return alert('로그인이 필요합니다.');
    }

    if (liked) {
      // 좋아요를 누른 상태
      dispatch({
        type: UNLIKE_POST_REQUEST,
        data: post.id,
      });
    } else {
      // 좋아요를 안누른 상태
      dispatch({
        type: LIKE_POST_REQUEST,
        data: post.id,
      });
    }
  }, [id, post && post.id, liked]);

  const onRetweet = useCallback(() => {
    if (!id) {
      return alert('로그인이 필요합니다');
    }
    return dispatch({
      type: RETWEET_REQUEST,
      data: post.id,
    });
  }, [id, post && post.id]);

  const onFollow = useCallback(userId => () => {
    dispatch({
      type: FOLLOW_USER_REQUEST,
      data: userId,
    });
  }, []);

  const onUnfollow = useCallback(userId => () => {
    dispatch({
      type: UNFOLLOW_USER_REQUEST,
      data: userId,
    });
  }, []);

  const onRemovePost = useCallback(userId => () => {
    dispatch({
      type: REMOVE_POST_REQUEST,
      data: userId,
    });
  }, []);

  return (
    <CardWrapper>
      <Card
        cover={post.Images && post.Images[0] && <PostImages images={post.Images} />}
        actions={[
          <Icon type="retweet" key="retweet" onClick={onRetweet} />,
          <Icon
            type="heart"
            key="heart"
            theme={liked ? 'twoTone' : 'outlined'}
            twoToneColor="#eb2f96"
            onClick={onToggleLike}
          />,
          <Icon type="message" key="message" onClick={onToggleComment} />,
          <Popover
            key="ellipsis"
            content={(
              <Button.Group>
                {id && post.UserId === id
                  ? (
                    <>
                      <Button>수정</Button>
                      <Button type="danger" onClick={onRemovePost(post.id)}>삭제</Button>
                    </>
                  )
                  : <Button>신고</Button>}
              </Button.Group>
            )}
          >
            <Icon type="ellipsis" />
          </Popover>,
        ]}
        title={post.RetweetId ? `${post.User.nickname}님이 이미 리트윗 하셨습니다.` : null}
        extra={<FollowButton post={post} onUnfollow={onUnfollow} onFollow={onFollow} />}
      >
        {post.RetweetId && post.Retweet
          ? (
            // 리트윗 한 경우 // Card 안에 Card(이건 남에 카드)
            <Card
              cover={post.Retweet.Images[0] && <PostImages images={post.Retweet.Images} />}
            >
              <span style={{ float: 'right' }}>{moment(post.createAt).format('YYYY.MM.DD.')}</span>
              <Card.Meta
                avatar={
                  <Link
                    href={{ pathname: '/user', query: { id: post.Retweet.User.id } }}
                    as={`/user/${post.Retweet.User.id}`}
                  >
                    <a><Avatar>{post.Retweet.User.nickname[0]}</Avatar></a>
                  </Link>
                }
                title={post.Retweet.User.nickname}
                description={<PostCardContent postData={post.Retweet.content} />}
              />
            </Card>
          )
          : (// 리트윗 안한 경우
            <>
              <span style={{ float: 'right' }}>{moment(post.createAt).format('YYYY.MM.DD.')}</span>
              <Card.Meta
                avatar={
                  // 동적인 주소는 프론트에서 처리 못해서 express서버 연결해서 거기서 처리함
                  // 그래서 이 요청이 front/server.js를 타기때문에 re render가 되서 페이지 리프레시가됨
                  // 이건 SPA가 아님.
                  // 그래서  href={`/user/${post.User.id}`}로 쓰면 안되고 아래처럼 써줘야함
                  // 근데 이렇게 쓰면 주소에 /user?id=2 이렇게 붙음. 이렇게 안하고싶으면
                  // 아래처럼 as 속성을 이용하면된다.
                  // 정리 : 서버쪽 주소는 아래처럼 적어주고, 프론트쪽 주소는 href={`/user/${post.User.id}`}처럼 적자
                  // (서버쪽 주소는 server.js에서 받고있는 주소)
                  <Link
                    href={{ pathname: '/user', query: { id: post.User.id } }}
                    as={`/user/${post.User.id}`}
                  >
                    <a><Avatar>{post.User.nickname[0]}</Avatar></a>
                  </Link>
                }
                title={post.User.nickname}
                // a tag로 바꾸는게 아니라 next의 Link 태그로 바꿔줘야함
                // 그래야 싱글페이지 어플리케이션이 유지됨
                description={<PostCardContent postData={post.content} />}
              />
            </>
          )
        }
      </Card>
      {commentFormOpened && (
        <>
          <CommentForm post={post} />
          <List
            header={`${post.Comments ? post.Comments.length : 0} comment`}
            itemLayout="horizontal"
            dataSource={post.Comments || []}
            renderItem={item => (
              <li>
                <Comment
                  author={item.User.nickname}
                  avatar={
                    <Link
                      href={{ pathname: '/user', query: { id: item.User.id } }}
                      as={`/user/${item.User.id}`}
                    >
                      <a><Avatar>{item.User.nickname[0]}</Avatar></a>
                    </Link>
                  }
                  content={item.content}
                />
              </li>
            )}
          />
        </>
      )}
    </CardWrapper>
  );
});

PostCard.propTypes = {
  post: PropTypes.shape({
    User: PropTypes.object,
    content: PropTypes.string,
    img: PropTypes.string,
    createdAt: PropTypes.string,
  }).isRequired,
};

export default PostCard;
