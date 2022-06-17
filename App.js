import React from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { Message } from './redux/Message';
import {Header} from 'react-native/Libraries/NewAppScreen';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Press Cmd+D or shake for dev menu\n',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu\n',
});

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
         <View style={styles.container}>
           <Header />
           <Text style={styles.welcome}>Created with Drew Template!</Text>
           <Text style={styles.instructions}>To get started, edit App.js</Text>
           <Text style={styles.instructions}>{instructions}</Text>
           <Message />
         </View>
      </Provider>
    );
  }
}

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
    marginTop: 200,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 30,
  },
});