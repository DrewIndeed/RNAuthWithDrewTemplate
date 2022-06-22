// instead of using createStore from Core Redux
import {configureStore} from '@reduxjs/toolkit';

// for redux PERSIST
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer} from 'redux-persist';

// for feeding middleware
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';

// root reducer
import {rootReducer} from './rootReducer';

// config param for persistReducer()
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth'], //  PERSISTED state attributes, names in this array are names of the slices
  blacklist: ['message'], // NOT PERSISTED state attributes, names in this array are names of the slices
};

// feed necessary params and create persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// create Redux store
const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk, createLogger()],
});

// export store and persistor to feed Provider and PersistorGate at App.js
export default store;
export const persistor = persistStore(store);
