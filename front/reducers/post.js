import produce from 'immer';

const initialState = {
  mainPosts: [], // 화면에 보일 포스트들
  imagePaths: [], // 미리보기 이미지 경로들
  addPostErrorReason: '', // 포스트 업로드 실패 사유
  isAddingPost: false, // 포스트 업로드 중
  postAdded: false, // 포스트 업로드 성공
  isAddingComment: false, // 댓글 업로드 중
  addCommentErrorReason: '', // 댓글 업로드 실패 사유
  commentAdded: false, // 댓글 업로드 성공
  singlePost: null,
};

// 메인 포스트 로딩 액션
export const LOAD_MAIN_POSTS_REQUEST = 'LOAD_MAIN_POSTS_REQUEST';
export const LOAD_MAIN_POSTS_SUCCESS = 'LOAD_MAIN_POSTS_SUCCESS';
export const LOAD_MAIN_POSTS_FAILURE = 'LOAD_MAIN_POSTS_FAILURE';

// 해시태그로 검색시 로딩하는 액션
export const LOAD_HASHTAG_POSTS_REQUEST = 'LOAD_HASHTAG_POSTS_REQUEST';
export const LOAD_HASHTAG_POSTS_SUCCESS = 'LOAD_HASHTAG_POSTS_SUCCESS';
export const LOAD_HASHTAG_POSTS_FAILURE = 'LOAD_HASHTAG_POSTS_FAILURE';

// 사용자가 어떤 게시글 썼는지 로딩하는 액션
export const LOAD_USER_POSTS_REQUEST = 'LOAD_USER_POSTS_REQUEST';
export const LOAD_USER_POSTS_SUCCESS = 'LOAD_USER_POSTS_SUCCESS';
export const LOAD_USER_POSTS_FAILURE = 'LOAD_USER_POSTS_FAILURE';

// 이미지 업로드 액션
export const UPLOAD_IMAGES_REQUEST = 'UPLOAD_IMAGES_REQUEST';
export const UPLOAD_IMAGES_SUCCESS = 'UPLOAD_IMAGES_SUCCESS';
export const UPLOAD_IMAGES_FAILURE = 'UPLOAD_IMAGES_FAILURE';

// 이미지 업로드 취소 액션
export const REMOVE_IMAGE = 'REMOVE_IMAGE';

// 포스트 추가 액션
export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';

// 하트버튼 클릭 액션
export const LIKE_POST_REQUEST = 'LIKE_POST_REQUEST';
export const LIKE_POST_SUCCESS = 'LIKE_POST_SUCCESS';
export const LIKE_POST_FAILURE = 'LIKE_POST_FAILURE';

// 하트버튼 취소 액션
export const UNLIKE_POST_REQUEST = 'UNLIKE_POST_REQUEST';
export const UNLIKE_POST_SUCCESS = 'UNLIKE_POST_SUCCESS';
export const UNLIKE_POST_FAILURE = 'UNLIKE_POST_FAILURE';

// 게시글 댓글 남기기 액션
export const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
export const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';

// 게시글 댓글들 불러오기 액션
export const LOAD_COMMENTS_REQUEST = 'LOAD_COMMENTS_REQUEST';
export const LOAD_COMMENTS_SUCCESS = 'LOAD_COMMENTS_SUCCESS';
export const LOAD_COMMENTS_FAILURE = 'LOAD_COMMENTS_FAILURE';

// 리트윗 액션
export const RETWEET_REQUEST = 'RETWEET_REQUEST';
export const RETWEET_SUCCESS = 'RETWEET_SUCCESS';
export const RETWEET_FAILURE = 'RETWEET_FAILURE';

// 포스트 제거 액션
export const REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';
export const REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
export const REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';

export const LOAD_POST_REQUEST = 'LOAD_POST_REQUEST';
export const LOAD_POST_SUCCESS = 'LOAD_POST_SUCCESS';
export const LOAD_POST_FAILURE = 'LOAD_POST_FAILURE';


const reducers = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case ADD_POST_REQUEST: {
        draft.isAddingPost = true;
        draft.addPostErrorReason = '';
        draft.postAdded = false;
        break;
      }
      case ADD_POST_SUCCESS: {
        draft.isAddingPost = false;
        draft.mainPosts.unshift(action.data);
        draft.postAdded = true;
        draft.imagePaths = [];
        break;
      }
      case ADD_POST_FAILURE: {
        draft.isAddingPost = false;
        draft.addPostErrorReason = action.error;
        break;
      }
      case LOAD_MAIN_POSTS_REQUEST:
      case LOAD_HASHTAG_POSTS_REQUEST:
      case LOAD_USER_POSTS_REQUEST: {
        draft.mainPosts = !action.lastId ? [] : draft.mainPosts;
        draft.hasMorePost = action.lastId ? draft.hasMorePost : true;
        break;
      }
      case LOAD_MAIN_POSTS_SUCCESS:
      case LOAD_HASHTAG_POSTS_SUCCESS:
      case LOAD_USER_POSTS_SUCCESS: {
        draft.mainPosts.push(...action.data);
        draft.hasMorePost = action.data.length === 10;
        break;
      }
      case LOAD_MAIN_POSTS_FAILURE:
      case LOAD_HASHTAG_POSTS_FAILURE:
      case LOAD_USER_POSTS_FAILURE: {
        break;
      }
      case ADD_COMMENT_REQUEST: {
        draft.isAddingComment = true;
        draft.addCommentErrorReason = '';
        draft.commentAdded = false;
        break;
      }
      case ADD_COMMENT_SUCCESS: {
        const postIndex = draft.mainPosts.findIndex(v => v.id === action.data.postId);
        draft.mainPosts[postIndex].Comments.push(action.data.comments);
        draft.isAddingComment = false;
        draft.commentAdded = true;
        break;
      }
      case ADD_COMMENT_FAILURE: {
        draft.isAddingComment = false;
        draft.addCommentErrorReason = action.error;
        break;
      }
      case LOAD_COMMENTS_REQUEST: {
        break;
      }
      case LOAD_COMMENTS_SUCCESS: {
        const postIndex = draft.mainPosts.findIndex(v => v.id === action.data.postId);
        draft.mainPosts[postIndex].Comments = action.data.comments;
        break;
      }
      case LOAD_COMMENTS_FAILURE: {
        break;
      }
      case UPLOAD_IMAGES_REQUEST: {
        break;
      }
      case UPLOAD_IMAGES_SUCCESS: {
        draft.imagePaths.push(...action.data);
        break;
      }
      case UPLOAD_IMAGES_FAILURE: {
        break;
      }
      case REMOVE_IMAGE: {
        const index = draft.imagePaths.findIndex((v, i) => i !== action.index);
        draft.imagePaths.splice(index, 1);
        break;
      }
      case LIKE_POST_REQUEST: {
        break;
      }
      case LIKE_POST_SUCCESS: {
        const postIndex = draft.mainPosts.findIndex(v => v.id === action.data.postId);
        draft.mainPosts[postIndex].Likers.unshift({ id: action.data.userId });
        break;
      }
      case LIKE_POST_FAILURE: {
        break;
      }
      case UNLIKE_POST_REQUEST: {
        break;
      }
      case UNLIKE_POST_SUCCESS: {
        const postIndex = draft.mainPosts.findIndex(v => v.id === action.data.postId);
        const likersIndex = draft.mainPosts[postIndex].Likers.findIndex(v => v.id === action.data.userId);
        draft.mainPosts[postIndex].Likers.splice(likersIndex, 1);
        break;
      }
      case UNLIKE_POST_FAILURE: {
        break;
      }
      case RETWEET_REQUEST: {
        break;
      }
      case RETWEET_SUCCESS: {
        draft.mainPost.unshift(action.data);
        break;
      }
      case RETWEET_FAILURE: {
        break;
      }
      case REMOVE_POST_REQUEST: {
        break;
      }
      case REMOVE_POST_SUCCESS: {
        const index = draft.mainPosts.findIndex(v => v.id !== action.data);
        draft.mainPosts.splice(index, 1);
        break;
      }
      case REMOVE_POST_FAILURE: {
        break;
      }
      case LOAD_POST_REQUEST: {
        break;
      }
      case LOAD_POST_SUCCESS: {
        draft.singlePost = action.data;
        break;
      }
      case LOAD_POST_FAILURE: {
        break;
      }
      default: {
        break;
      }
    }
  });
};

export default reducers;
