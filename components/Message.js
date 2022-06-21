import React from 'react';
import {Button, Text, View, Alert} from 'react-native';

// REDUX
import {useSelector, useDispatch} from 'react-redux';
import {userLogout, showMsg, resetMsg} from '../redux/actions';

export const Message = ({navigation}) => {
  const {userInfo, userMsg} = useSelector(state => state.drewAuthReducer);
  const dispatch = useDispatch();

  const showMsgHandler = () => {
    try {
      dispatch(showMsg());
    } catch (error) {
      console.log(errors);
    }
  };

  const resetMsgHandler = () => {
    try {
      dispatch(resetMsg());
    } catch (error) {
      console.log(error);
    }
  };

  const logoutHandler = () => {
    try {
      resetMsgHandler();

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
        {userMsg}
      </Text>
      <Button title={'Set Message'} onPress={showMsgHandler} />
      <Button title={'Reset Message'} onPress={resetMsgHandler} />
      <Button title="Log Out" onPress={logoutHandler} />
    </View>
  );
};
