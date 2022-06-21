// Define action types
export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGOUT = 'USER_LOGOUT';
export const SHOW_MSG = 'SHOW_MSG';
export const RESET_MSG = 'RESET_MSG';

// Define action creators
export const userLogin = userInfo => dispatch => {
  dispatch({
    type: USER_LOGIN,
    payload: userInfo,
  });
};

export const userLogout = () => dispatch => {
  dispatch({
    type: USER_LOGOUT,
    payload: {
      isAuthenticated: false,
      userEmail: '',
      userPwd: '',
    },
  });
};

export const showMsg =
  (msg = 'Hello from powerful Redux ⚡️') =>
  dispatch => {
    dispatch({
      type: SHOW_MSG,
      payload: msg,
    });
  };

export const resetMsg = () => dispatch => {
  dispatch({
    type: RESET_MSG,
    payload: 'Tap "Show Message" for a secret!',
  });
};
