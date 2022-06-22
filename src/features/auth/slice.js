import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer} from 'redux-persist';

// async login simulation: fulfilled case
export const asyncLoginSuccess = createAsyncThunk(
  'auth/asyncLoginSuccess',
  inputInfo =>
    new Promise(resolve =>
      setTimeout(() => {
        resolve(inputInfo);
      }, 3000),
    ),
);

// async login simulation: error case
export const asyncLoginError = createAsyncThunk(
  'auth/asyncLoginError',
  inputInfo => {
    throw new Error('Async logged in currently failed');
  },
);

// async logout simulation: fulfilled case
export const asyncLogoutSuccess = createAsyncThunk(
  'auth/asyncLogoutSuccess',
  () =>
    new Promise(resolve =>
      setTimeout(() => {
        resolve('Logged out successfully');
      }, 3000),
    ),
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
    info: {
      email: '',
      pwd: '',
    },
    asyncResponse: null,
    asyncError: null,
  },
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.info = {
        email: action.payload.email,
        pwd: action.payload.pwd,
      };
      state.asyncResponse = null;
      state.asyncError = null;
    },
    logout: state => {
      state.isAuthenticated = false;
      state.info = {
        email: '',
        pwd: '',
      };
      state.asyncResponse = null;
      state.asyncError = null;
    },
  },
  extraReducers: {
    [asyncLoginSuccess.pending]: state => {
      state.isAuthenticated = false;
      state.asyncResponse = null;
      state.asyncError = null;
    },
    [asyncLoginSuccess.fulfilled]: (state, action) => {
      state.isAuthenticated = true;
      state.asyncResponse = action.payload;
      state.asyncError = null;
    },
    [asyncLoginError.pending]: state => {
      state.isAuthenticated = false;
      state.asyncResponse = null;
      state.asyncError = null;
    },
    [asyncLoginError.fulfilled]: (state, action) => {
      state.isAuthenticated = false;
      state.asyncResponse = null;
      state.asyncError = action.payload;
    },
    [asyncLogoutSuccess.pending]: state => {
      state.isAuthenticated = true;
    },
    [asyncLogoutSuccess.fulfilled]: state => {
      state.isAuthenticated = false;
      state.asyncResponse = null;
      state.asyncError = null;
    },
  },
});

const persistConfig = {
  key: 'authSlice',
  storage: AsyncStorage,
};

export const {login, logout} = authSlice.actions;
export default persistReducer(persistConfig, authSlice.reducer);
