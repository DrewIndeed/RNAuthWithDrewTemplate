// instead of using createStore from Core Redux
import {configureStore} from '@reduxjs/toolkit';

// for redux PERSIST
import {combineReducers} from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer} from 'redux-persist';

// for feeding middleware
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';

// indi reducers
import authReducer from '../slices/authSlice';
import messageReducer from '../slices/messageSlice';

// combined reducer -> target for persistReducer() method because it can only eat 1 reducer
const reducers = combineReducers({
  auth: authReducer,
  message: messageReducer,
});

// config param for persistReducer()
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth'], //  PERSISTED state attributes, names in this array are names of the slices
  blacklist: ['message'], // NOT PERSISTED state attributes, names in this array are names of the slices
};

// feed necessary params and create persisted reducer
const persistedReducer = persistReducer(persistConfig, reducers);

// create Redux store
const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk, createLogger()],
});

// export store and persistor to feed Provider and PersistorGate at App.js
export default store;
export const persistor = persistStore(store);
