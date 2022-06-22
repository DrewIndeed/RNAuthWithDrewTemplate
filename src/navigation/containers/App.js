import React, {useContext, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';

// navigators
import {BoardingNavigator} from '../navigators/Boarding';
import {HomeNavigator} from '../navigators/Home';

// Auth Context
import {AuthContext} from '../../components/AuthProvider';

export const AppNavigationContainer = () => {
  const {isAuthenticated} = useContext(AuthContext);

  // print current storage
  useEffect(() => {
    console.log('at AppNavigationContainer', isAuthenticated);
  }, []);

  return (
    <NavigationContainer>
      {isAuthenticated ? <HomeNavigator /> : <BoardingNavigator />}
    </NavigationContainer>
  );
};
