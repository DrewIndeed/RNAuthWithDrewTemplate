// to combine indi reducers
import {combineReducers} from 'redux';

// indi reducers
import authReducer from '../../features/auth/slice';
import messageReducer from '../../features/message/slice';

// combined reducer -> target for persistReducer() method because it can only eat 1 reducer
export const rootReducer = combineReducers({
  auth: authReducer,
  message: messageReducer,
});
