import {createSlice} from '@reduxjs/toolkit';

// user slice definition
const userInitialState = {
  isAuthenticated: false,
  userEmail: '',
  userPwd: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState: {
    userStatus: userInitialState,
  },
  reducers: {
    login(state, action) {
      state.userStatus = action.payload;
    },
    logout(state) {
      state.userStatus = userInitialState;
    },
  },
});

export const {login, logout} = userSlice.actions;
export default userSlice.reducer;
