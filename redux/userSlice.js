import {createSlice} from '@reduxjs/toolkit';

//user slice definition
const userInitialState = {
  isAuthenticated: false,
  userEmail: '',
  userPwd: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState: userInitialState,
  reducers: {
    login(state, action) {
      state.isAuthenticated = action.payload.isAuthenticated;
      state.userEmail = action.payload.userEmail;
      state.userPwd = action.payload.userPwd;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.userEmail = '';
      state.userPwd = '';
    },
  },
});

export const {login, logout} = messageSlice.actions;
export default userSlice.reducer;
