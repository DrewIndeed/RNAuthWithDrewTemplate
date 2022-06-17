import React from 'react';
import { View, Text, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setMessage, resetMessage } from './messageSlice';

export const Message = () => {
  const dispatch = useDispatch();
  const { message } = useSelector((state) => state.message);

  const handlePress1 = () => {
    dispatch(setMessage('Redux Ready to Serve ⚡️'));
  };

  const handlePress2= () => {
    dispatch(resetMessage());
  };

  return (
    <View style={{flex: 1}}>
      <Text style={{fontWeight: 'bold', fontSize: 18, marginBottom: 10}}>{message}</Text>
      <Button title={'Set Message'} onPress={handlePress1} />
      <Button title={'Reset Message'} onPress={handlePress2} />
    </View>
  );
};