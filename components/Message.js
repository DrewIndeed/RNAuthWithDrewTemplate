import React from 'react';
import {View, Text, Button, Alert} from 'react-native';

// to use Redux actions and action payload
import {useDispatch, useSelector} from 'react-redux';
import {logout} from '../redux/userSlice';

// redux actions from (message) reducer
import {setMessage, resetMessage} from '../redux/messageSlice';

// methods to handle data
import logCurrentStorage from '../utils/logCurrentStorage';
import {removeData} from '../utils/processData';

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
          // remove user data from Async Storage
          removeData('userInfo');

          // update App's Redux state
          dispatch(logout());

          // print current Async Storage
          logCurrentStorage('Message Component');

          // notify that user has already logged in
          Alert.alert('Status', `Logged out successfully!`, [
            {
              text: 'OK',
              onPress: () => {
                navigation.reset({routes: [{name: 'Login'}]});
              },
            },
          ]);
        }}
      />
    </View>
  );
};
