import {USER_LOGIN, USER_LOGOUT} from './actions';

const initialState = {
  userInfo: {
    isAuthenticated: false,
    userEmail: '',
    userPwd: '',
  },
  userMsg: '',
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
    default:
      return state;
  }
}

export default drewAuthReducer;
