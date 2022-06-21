import {USER_LOGIN, USER_LOGOUT, SHOW_MSG, RESET_MSG} from './actions';

const initialState = {
  userInfo: {
    isAuthenticated: false,
    userEmail: '',
    userPwd: '',
  },
  userMsg: 'Tap "Show Message" for a secret!',
};

function drewAuthReducer(state = initialState, action) {
  switch (action.type) {
    case USER_LOGIN:
      return {...state, userInfo: action.payload};
    case USER_LOGOUT:
      return {
        ...state,
        userInfo: {
          isAuthenticated: false,
          userEmail: '',
          userPwd: '',
        },
      };
    case SHOW_MSG:
      return {
        ...state,
        userMsg: action.payload,
      };

    case RESET_MSG:
      return {
        ...state,
        userMsg: 'Tap "Show Message" for a secret!',
      };
    default:
      return state;
  }
}

export default drewAuthReducer;
