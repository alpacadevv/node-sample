import produce from 'immer';

const initialState = {
  isLoggingIn: false, // 로그인 시도중
  isLoggingOut: false, // 로그아웃 시도중
  logInErrorReason: '', // 로그인 실패 사유
  isSignedUp: false, // 회원가입 성공
  isSigningUp: false, // 회원가입 시도중
  signUpErrorReason: '', // 회원가입 실패 사유
  me: null, // 내 정보
  followingList: [], // 팔로잉 리스트
  followerList: [], // 팔로워 리스트
  userInfo: null, // 남의 정보
  isEditingNickname: false, // 이름 변경 중
  editNicknameErrorReason: '', // 이름 변경 실패 사유
  hasMoreFollower: false,
  hasMoreFollowing: false,
};

// 회원가입 액션
export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';

// 로그인 액션
export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';

// 사용자 정보 로딩 액션
export const LOAD_USER_REQUEST = 'LOAD_USER_REQUEST';
export const LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS';
export const LOAD_USER_FAILURE = 'LOAD_USER_FAILURE';

// 로그아웃 액션
export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';

// 나를 팔로우 하는사람 목록 조회 액션
export const LOAD_FOLLOWERS_REQUEST = 'LOAD_FOLLOWERS_REQUEST';
export const LOAD_FOLLOWERS_SUCCESS = 'LOAD_FOLLOWERS_SUCCESS';
export const LOAD_FOLLOWERS_FAILURE = 'LOAD_FOLLOWERS_FAILURE';

// 내가 팔로우 하고있는 목록 조회 액션
export const LOAD_FOLLOWINGS_REQUEST = 'LOAD_FOLLOWINGS_REQUEST';
export const LOAD_FOLLOWINGS_SUCCESS = 'LOAD_FOLLOWINGS_SUCCESS';
export const LOAD_FOLLOWINGS_FAILURE = 'LOAD_FOLLOWINGS_FAILURE';

// 다른사람 팔로우 하는 액션
export const FOLLOW_USER_REQUEST = 'FOLLOW_USER_REQUEST';
export const FOLLOW_USER_SUCCESS = 'FOLLOW_USER_SUCCESS';
export const FOLLOW_USER_FAILURE = 'FOLLOW_USER_FAILURE';

// 다른사람 언팔로우 하는 액션
export const UNFOLLOW_USER_REQUEST = 'UNFOLLOW_USER_REQUEST';
export const UNFOLLOW_USER_SUCCESS = 'UNFOLLOW_USER_SUCCESS';
export const UNFOLLOW_USER_FAILURE = 'UNFOLLOW_USER_FAILURE';

// 나를 팔로우하는 사람 없애는 액션
export const REMOVE_FOLLOWER_REQUEST = 'REMOVE_FOLLOWER_REQUEST';
export const REMOVE_FOLLOWER_SUCCESS = 'REMOVE_FOLLOWER_SUCCESS';
export const REMOVE_FOLLOWER_FAILURE = 'REMOVE_FOLLOWER_FAILURE';

export const ADD_POST_TO_ME = 'ADD_POST_TO_ME';
export const REMOVE_POST_OF_ME = 'REMOVE_POST_OF_ME';

export const EDIT_NICKNAME_REQUEST = 'EDIT_NICKNAME_REQUEST';
export const EDIT_NICKNAME_SUCCESS = 'EDIT_NICKNAME_SUCCESS';
export const EDIT_NICKNAME_FAILURE = 'EDIT_NICKNAME_FAILURE';

const reducer = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case SIGN_UP_REQUEST: {
        draft.isSigningUp = true;
        draft.isSignedUp = false;
        draft.signUpErrorReason = '';
        break;
      }
      case SIGN_UP_SUCCESS: {
        draft.isSigningUp = false;
        draft.isSignedUp = true;
        break;
      }
      case SIGN_UP_FAILURE: {
        draft.isSigningUp = false;
        draft.signUpErrorReason = action.error;
        break;
      }
      case LOG_IN_REQUEST: {
        draft.isLoggingIn = true;
        draft.logInErrorReason = '';
        break;
      }
      case LOG_IN_SUCCESS: {
        draft.isLoggingIn = false;
        draft.me = action.data;
        draft.isLoading = false;
        break;
      }
      case LOG_IN_FAILURE: {
        draft.isLoggingIn = false;
        draft.logInErrorReason = action.reason;
        draft.me = null;
        break;
      }
      case LOG_OUT_REQUEST: {
        draft.isLoggingOut = true;
        break;
      }
      case LOG_OUT_SUCCESS: {
        draft.isLoggingOut = false;
        draft.me = null;
        break;
      }
      case LOAD_USER_REQUEST: {
        break;
      }
      case LOAD_USER_SUCCESS: {
        if (action.me) {
          draft.me = action.data;
          break;
        }
        draft.userInfo = action.data;
        break;
      }
      case LOAD_USER_FAILURE: {
        break;
      }
      case LOAD_FOLLOWERS_REQUEST: {
        draft.followerList = !action.offset ? [] : draft.followerList;
        // 처음 데이터를 가져올때는 더보기 버튼을 true로
        draft.hasMoreFollower = action.offset ? draft.hasMoreFollower : true;
        break;
      }
      case LOAD_FOLLOWERS_SUCCESS: {
        draft.followerList.push(...action.data);
        draft.hasMoreFollower = action.data.length === 3;
        break;
      }
      case LOAD_FOLLOWERS_FAILURE: {
        break;
      }
      case LOAD_FOLLOWINGS_REQUEST: {
        draft.followingList = !action.offset ? [] : draft.followingList;
        draft.hasMoreFollowing = action.offset ? draft.hasMoreFollowing : true;
        break;
      }
      case LOAD_FOLLOWINGS_SUCCESS: {
        draft.followingList.push(...action.data);
        draft.hasMoreFollowing = action.data.length === 3;
        break;
      }
      case LOAD_FOLLOWINGS_FAILURE: {
        break;
      }
      case FOLLOW_USER_REQUEST: {
        break;
      }
      case FOLLOW_USER_SUCCESS: {
        draft.me.Followings.unshift({ id: action.data });
        break;
      }
      case FOLLOW_USER_FAILURE: {
        break;
      }
      case UNFOLLOW_USER_REQUEST: {
        break;
      }
      case UNFOLLOW_USER_SUCCESS: {
        const followingIndexOfMe = draft.me.Followings.findIndex(v => v.id === action.data);
        const followingIndex = draft.followingList.findIndex(v => v.id === action.data);
        draft.me.Followings.splice(followingIndexOfMe, 1);
        draft.followingList.splice(followingIndex, 1);
        break;
      }
      case UNFOLLOW_USER_FAILURE: {
        break;
      }
      case REMOVE_FOLLOWER_REQUEST: {
        break;
      }
      case REMOVE_FOLLOWER_SUCCESS: {
        const followerIndexOfMe = draft.me.Followers.findIndex(v => v.id === action.data);
        const followerIndex = draft.followerList.findIndex(v => v.id === action.data);
        draft.me.Followers.splice(followerIndexOfMe, 1);
        draft.followerList.splice(followerIndex);
        break;
      }
      case REMOVE_FOLLOWER_FAILURE: {
        break;
      }
      case ADD_POST_TO_ME: {
        draft.me.Posts.unshift({ id: action.data });
        break;
      }
      case REMOVE_POST_OF_ME: {
        console.log('action.data : ', action.data);
        const postIndex = draft.me.Posts.findIndex(v => v.id !== action.data);
        draft.me.Posts.splice(postIndex, 1);
        break;
      }
      case EDIT_NICKNAME_REQUEST: {
        draft.isEditingNickname = true;
        draft.editNicknameErrorReason = '';
        break;
      }
      case EDIT_NICKNAME_SUCCESS: {
        draft.isEditingNickname = false;
        draft.me.nickname = action.data;
        break;
      }
      case EDIT_NICKNAME_FAILURE: {
        draft.isEditingNickname = false;
        draft.editNicknameErrorReason = action.error;
        break;
      }
      default: {
        return {
          ...state,
        };
      }
    }
  });
};

export default reducer;
