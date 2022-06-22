import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';

// navigators
import {BoardingNavigator} from '../navigators/Boarding';
import {HomeNavigator} from '../navigators/Home';

import {authenticatedSelector} from '../../features/auth/selectors';
import {useSelector} from 'react-redux';

export const AppNavigationContainer = () => {
  const authenticatedGrabber = useSelector(authenticatedSelector);

  useEffect(() => {
    console.log('at AppNavigationContainer', authenticatedGrabber);
  }, []);

  return (
    <NavigationContainer>
      {authenticatedGrabber ? <HomeNavigator /> : <BoardingNavigator />}
    </NavigationContainer>
  );
};
