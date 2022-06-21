import {configureStore} from '@reduxjs/toolkit';

// indi reducers
import authReducer from '../slices/authSlice';
import messageReducer from '../slices/messageSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    message: messageReducer,
  },
});

export default store;
