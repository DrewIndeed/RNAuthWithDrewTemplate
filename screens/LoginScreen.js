import React from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';

export const LoginScreen = ({navigation}) => {
  console.log('at login');
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 40}}>Login For More 🔥</Text>
      <Button title="Log In" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
