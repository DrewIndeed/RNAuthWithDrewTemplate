import React from 'react';
import {Button, Text, View} from 'react-native';

export const Message = () => {
  return (
    <View style={{flex: 1}}>
      <Text style={{fontWeight: 'bold', fontSize: 18, marginBottom: 10}}>
        Dummy
      </Text>
      <Button title={'Set Message'} onPress={() => {}} />
      <Button title={'Reset Message'} onPress={() => {}} />
      <Button title="Log Out" onPress={() => {}} />
    </View>
  );
};
