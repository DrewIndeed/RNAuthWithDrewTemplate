import React from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './redux/store';
import {Message} from './redux/Message';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {LoginScreen} from './screens/LoginScreen';

const HomeScreen = ({navigation}) => {
  console.log('at home');
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Text style={styles.welcome}>Created with Drew Template!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <Message navigation={navigation} />
      </View>
    </Provider>
  );
};

const Stack = createStackNavigator();

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Press Cmd+D or shake for dev menu\n',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu\n',
});

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{title: 'Login Screen', headerLeft: null}}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Welcome Back!', headerLeft: null}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
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
    marginTop: 100,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    margin: 15,
  },
});
