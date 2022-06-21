import React from 'react';
import {Button, Text, View, Alert} from 'react-native';

import {useSelector, useDispatch} from 'react-redux';
import {userLogout} from '../redux/actions';

export const Message = ({navigation}) => {
  const {userInfo} = useSelector(state => state.drewAuthReducer);
  const dispatch = useDispatch();

  const logoutHandler = () => {
    try {
      dispatch(userLogout());

      Alert.alert('Status', `See you later, ${userInfo.userEmail}`, [
        {
          text: 'OK',
          onPress: () => {
            navigation.reset({routes: [{name: 'Login'}]});
          },
        },
      ]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={{flex: 1}}>
      <Text style={{fontWeight: 'bold', fontSize: 18, marginBottom: 10}}>
        {'lol'}
      </Text>
      <Button title={'Set Message'} onPress={() => {}} />
      <Button title={'Reset Message'} onPress={() => {}} />
      <Button title="Log Out" onPress={logoutHandler} />
    </View>
  );
};
