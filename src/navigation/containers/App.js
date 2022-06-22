import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// navigators
import {BoardingNavigator} from '../navigators/Boarding';
import {HomeNavigator} from '../navigators/Home';

const Stack = createStackNavigator();
export const AppNavigationContainer = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="BoardingNavigator">
      <Stack.Screen
        name="BoardingNavigator"
        component={BoardingNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="HomeNavigator"
        component={HomeNavigator}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  </NavigationContainer>
);
