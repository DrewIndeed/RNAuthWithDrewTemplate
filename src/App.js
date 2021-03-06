import React from 'react';
import {Provider} from 'react-redux';
import store, {persistor} from './config/store';

// for redux PERSIST
import {PersistGate} from 'redux-persist/integration/react';

// navigator containers
import {AppNavigationContainer} from './navigation/containers/App';

// loading indicator component
import {LoadingMarkup} from './components/LoadingMarkup';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={<LoadingMarkup />} persistor={persistor}>
        <AppNavigationContainer />
      </PersistGate>
    </Provider>
  );
}
