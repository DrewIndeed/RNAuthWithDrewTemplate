import React from 'react';
import {Provider} from 'react-redux';
import store, {persistor} from './config/store/store';

// for redux PERSIST
import {ActivityIndicator, View} from 'react-native';
import {PersistGate} from 'redux-persist/integration/react';

// for navigation stack
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// screens
import {HomeScreen} from './screens/HomeScreen';
import {LoginScreen} from './screens/LoginScreen';

// loading indicator component
const LoadingMarkup = () => (
  <View
    style={{
      flex: 1,
      justifyContent: 'center',
    }}>
    <ActivityIndicator size="large" color="#0000ff" />
  </View>
);

const Stack = createStackNavigator();
export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={<LoadingMarkup />} persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{title: 'Login Screen', headerShown: false}}
            />
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{title: 'Home Screen', headerLeft: null}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
