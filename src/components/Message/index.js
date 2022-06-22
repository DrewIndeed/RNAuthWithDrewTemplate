import React from 'react';
import {Button, Text, View} from 'react-native';

// redux
import {useDispatch, useSelector} from 'react-redux';
import {logout} from '../../../features/authSlice';
import {show, hide} from '../../../features/messageSlice';
import {rootSelector} from '../../config/store/rootSelector';

export const Message = ({navigation}) => {
  const dispatch = useDispatch();
  const grabber = useSelector(rootSelector);

  return (
    <View style={{flex: 1}}>
      <Text style={{fontWeight: 'bold', fontSize: 18, marginBottom: 10}}>
        {grabber.message.content}
      </Text>
      <Button
        title={'Say Greeting'}
        onPress={() =>
          dispatch(
            show(`Hello ${grabber.auth.asyncResponse.email} - from Redux ⚡️`),
          )
        }
      />
      <Button title={'Hide Greeting'} onPress={() => dispatch(hide())} />
      <Button
        title="Log Out"
        onPress={() => {
          // redux logout
          dispatch(logout());

          // go back to Login
          navigation.reset({
            index: 0,
            routes: [{name: 'BoardingNavigator'}],
          });
        }}
      />
    </View>
  );
};
