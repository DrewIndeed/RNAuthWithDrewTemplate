import React from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import {Message} from '../components/Message';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Press Cmd+D or shake for dev menu\n',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu\n',
});

export const HomeScreen = ({navigation}) => {
  console.log('at home');
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Created with Drew Template!</Text>
      <Text style={styles.instructions}>To get started, edit App.js</Text>
      <Text style={styles.instructions}>{instructions}</Text>
      <Message navigation={navigation} />
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
  welcome: {
    fontSize: 25,
    textAlign: 'center',
    marginTop: 100,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    margin: 15,
  },
});
