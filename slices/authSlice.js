import {createSlice} from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
    info: {
      email: '',
      pwd: '',
    },
  },
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.info = {
        email: action.payload.email,
        pwd: action.payload.pwd,
      };
    },
    logout: state => {
      state.isAuthenticated = false;
      state.info = {
        email: '',
        pwd: '',
      };
    },
  },
});

export const {login, logout} = authSlice.actions;
export default authSlice.reducer;
