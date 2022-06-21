import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer} from 'redux-persist';

import drewAuthReducer from './reducers';
import {createLogger} from 'redux-logger';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['userInfo'], // the state in REDUCER, oh goshhh
};

const rootReducer = combineReducers({
  drewAuthReducer: persistReducer(persistConfig, drewAuthReducer),
});

export const store = createStore(
  rootReducer,
  applyMiddleware(thunk, createLogger()),
);
export const persistor = persistStore(store);