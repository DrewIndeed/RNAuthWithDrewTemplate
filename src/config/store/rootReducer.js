// to combine indi reducers
import {combineReducers} from 'redux';

// indi reducers
import authReducer from '../../../features/authSlice';
import messageReducer from '../../../features/messageSlice';

// combined reducer -> target for persistReducer() method because it can only eat 1 reducer
export const rootReducer = combineReducers({
  auth: authReducer,
  message: messageReducer,
});
