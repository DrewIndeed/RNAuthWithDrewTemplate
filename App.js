import React from 'react';
import {Provider} from 'react-redux';
import {store} from './redux/store';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {HomeScreen} from './screens/HomeScreen';
import {LoginScreen} from './screens/LoginScreen';

const Stack = createStackNavigator();
export default function App() {
  return (
    <Provider store={store}>
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
            options={{title: 'Welcome Back!', headerLeft: null}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
