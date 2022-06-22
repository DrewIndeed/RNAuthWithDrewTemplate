import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// screens
import {HomeScreen} from '../../../screens/Home';
import {Home1Screen} from '../../../screens/Home1';

const Stack = createStackNavigator();
export const HomeNavigator = () => (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={{title: 'Home Screen', headerLeft: false}}
    />

    <Stack.Screen
      name="Home1"
      component={Home1Screen}
      options={{title: 'Home1 Screen', headerLeft: false}}
    />
  </Stack.Navigator>
);
