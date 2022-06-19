import React from 'react';
import {View, Text, Button} from 'react-native';

// to use Redux actions and action payload
import {useDispatch, useSelector} from 'react-redux';

// redux actions from (message) reducer
import {setMessage, resetMessage} from '../redux/messageSlice';

export const Message = ({navigation}) => {
  // init dispatch function
  const dispatch = useDispatch();

  // get message data from redux state of (message) reducer
  const {message} = useSelector(state => state.message);

  // when Set Message button is clicked
  const handlePress1 = () => {
    dispatch(setMessage('Redux Ready to Serve ⚡️'));
  };

  // when Reset Message button is clicked
  const handlePress2 = () => {
    dispatch(resetMessage());
  };

  return (
    <View style={{flex: 1}}>
      <Text style={{fontWeight: 'bold', fontSize: 18, marginBottom: 10}}>
        {message}
      </Text>
      <Button title={'Set Message'} onPress={handlePress1} />
      <Button title={'Reset Message'} onPress={handlePress2} />
      <Button
        title="Log Out"
        onPress={() => {
          navigation.reset({routes: [{name: 'Login'}]});
        }}
      />
    </View>
  );
};
