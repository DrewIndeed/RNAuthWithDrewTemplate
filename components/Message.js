import React from 'react';
import {Button, Text, View} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';
import {logout} from '../slices/authSlice';
import {show, hide} from '../slices/messageSlice';
import {mainSelector} from '../redux/selectors';

export const Message = ({navigation}) => {
  const dispatch = useDispatch();
  const grabber = useSelector(mainSelector);

  return (
    <View style={{flex: 1}}>
      <Text style={{fontWeight: 'bold', fontSize: 18, marginBottom: 10}}>
        {grabber.message.content}
      </Text>
      <Button
        title={'Say Greeting'}
        onPress={() =>
          dispatch(show(`Hello ${grabber.auth.info.email} - from Redux ⚡️`))
        }
      />
      <Button title={'Hide Greeting'} onPress={() => dispatch(hide())} />
      <Button
        title="Log Out"
        onPress={() => {
          dispatch(logout());
          navigation.reset({
            index: 0,
            routes: [{name: 'Login'}],
          });
        }}
      />
    </View>
  );
};
