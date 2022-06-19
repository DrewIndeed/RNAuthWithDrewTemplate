// REDUX-PERSIST
import AsyncStorage from '@react-native-async-storage/async-storage';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import {createLogger} from 'redux-logger';
import {persistReducer, persistStore} from 'redux-persist';

import messageReducer from './messageSlice';
import userReducer from './userSlice';

const rootReducer = combineReducers({
  user: userReducer,
  message: messageReducer,
});

// persist config obj
// blacklist a store attribute using it's reducer name.
const persistConfig = {
  key: 'root',
  version: 1,
  storage: AsyncStorage,
  // Whitelist (Save Specific Reducers)
  whitelist: ['userReducer'],
  // Blacklist (Don't Save Specific Reducers)
  blacklist: ['messageReducer'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, applyMiddleware(createLogger()));

// Middleware: Redux Persist Persister
let persistor = persistStore(store);

// Exports
export {store, persistor};
