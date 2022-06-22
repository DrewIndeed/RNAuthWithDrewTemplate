import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// screens
import {LoginScreen} from '../../../screens/Login';
import {SignupScreen} from '../../../screens/Signup';

const Stack = createStackNavigator();
export const BoardingNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Login"
      component={LoginScreen}
      options={{title: 'Login Screen', headerShown: false}}
    />
    <Stack.Screen
      name="Signup"
      component={SignupScreen}
      options={{title: 'Signup Screen'}}
    />
  </Stack.Navigator>
);
