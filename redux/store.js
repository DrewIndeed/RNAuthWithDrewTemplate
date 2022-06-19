// async storage
import AsyncStorage from '@react-native-async-storage/async-storage';

// handle Redux reducers and store
import {applyMiddleware, combineReducers, createStore} from 'redux';

// logger inside middleware
import {createLogger} from 'redux-logger';

// transform palin Redux to persisted Redux
import {persistReducer, persistStore} from 'redux-persist';

// individual reducers
import messageReducer from './messageSlice';
import userReducer from './userSlice';

// combine indi reducer
const rootReducer = combineReducers({
  user: userReducer,
  message: messageReducer,
});

// persist config obj
const persistConfig = {
  key: 'root', // also the same key storred in Async Storage
  version: 1,
  storage: AsyncStorage,
  // these will be persisted
  whitelist: ['userReducer'],
  // these will NOT be persisted
  blacklist: ['messageReducer'],
};

// persist reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// persist store
const store = createStore(persistedReducer, applyMiddleware(createLogger()));
const persistor = persistStore(store);

// exports
export {store, persistor};
