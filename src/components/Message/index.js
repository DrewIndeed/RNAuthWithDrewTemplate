import React from 'react';
import {Button, Text, View} from 'react-native';

// redux
import {useDispatch, useSelector} from 'react-redux';
import {logout} from '../../features/auth/slice';
import {show, hide} from '../../features/message/slice';

// selectors
import {emailSelector} from '../../features/auth/selectors';
import {contentSelector} from '../../features/message/selectors';

export const Message = ({navigation}) => {
  const dispatch = useDispatch();
  const emailGrabber = useSelector(emailSelector);
  const contentGrabber = useSelector(contentSelector);

  return (
    <View style={{flex: 1}}>
      <Text style={{fontWeight: 'bold', fontSize: 18, marginBottom: 10}}>
        {contentGrabber}
      </Text>
      <Button
        title={'Say Greeting'}
        onPress={() => dispatch(show(`Hello ${emailGrabber} - from Redux ⚡️`))}
      />
      <Button title={'Hide Greeting'} onPress={() => dispatch(hide())} />
      <Button
        title="Log Out"
        onPress={() => {
          // redux logout
          dispatch(logout());

          // go back to Login
          setTimeout(() => {
            navigation.navigate('Login');
          }, 500);
        }}
      />
    </View>
  );
};
