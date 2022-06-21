import {configureStore} from '@reduxjs/toolkit';

// for redux PERSIST
import {combineReducers} from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer} from 'redux-persist';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';

// indi reducers
import authReducer from '../slices/authSlice';
import messageReducer from '../slices/messageSlice';

const reducers = combineReducers({
  auth: authReducer,
  message: messageReducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth'],
  blacklist: ['message'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk, createLogger()],
});

export default store;
export const persistor = persistStore(store);
