import React, {useEffect} from 'react';
import {Text, View, TextInput, Button, StyleSheet, Alert} from 'react-native';
import {useForm, useController} from 'react-hook-form';

import {useDispatch} from 'react-redux';
import {login} from '../redux/userSlice';

import logCurrentStorage from '../utils/logCurrentStorage';
import {saveData, getData, readData} from '../utils/processData';

// resuable input field
const Input = ({name, control}) => {
  const {field} = useController({control, defaultValue: '', name});
  return (
    <TextInput
      style={styles.input}
      value={field.value}
      onChangeText={field.onChange}
      placeholder="Make it good!"
      secureTextEntry={name === 'password'}
    />
  );
};

export const LoginScreen = ({navigation}) => {
  // react hook form init
  const {control, handleSubmit, reset} = useForm();

  // redux usage
  const dispatch = useDispatch();

  // medthod to check login status (when App first loads)
  const checkLogin = async () => {
    // get and parse data strong from Async Storages
    const rawInfoData = await getData('userInfo');
    const userInfo = JSON.parse(rawInfoData);

    // console.log(`userInfo in checkLogin(): ${userInfo}`);
    // console.log(`userEmail in checkLogin() ${userInfo.userEmail}`);

    if (userInfo.userEmail) {
      // notify that user has already logged in
      Alert.alert('Status', `Welcome back, ${userInfo.userEmail}`, [
        {
          text: "Let's Go",
          onPress: () => {
            navigation.navigate('Home');
            reset();
          },
        },
      ]);

      // update App's Redux state
      dispatch(
        login({
          isAuthenticated: true,
          userEmail: userInfo.userEmail,
          userPwd: userInfo.userPwd,
        }),
      );

      // print current Async Storage
      logCurrentStorage('LoginScreen');
    }
  };

  // read data from storageg to check
  useEffect(() => {
    checkLogin();
  }, []);

  // handle submit
  const onSubmit = data => {
    if (data.email.length === 0) {
      // if email is blank
      Alert.alert('Status', 'Email is required!', [
        {
          text: 'OK',
        },
      ]);
    } else if (data.password.length === 0) {
      // if passowrd is blank
      Alert.alert('Status', 'Password is required!', [
        {
          text: 'OK',
        },
      ]);
    } else {
      // otherwise, login and proceed to Home Screen

      // notify that user has already logged in
      Alert.alert('Status', `Welcome back, ${data.email}`, [
        {
          text: "Let's Go",
          onPress: () => {
            navigation.navigate('Home');
            reset();
          },
        },
      ]);

      // update App's Redux state
      dispatch(
        login({
          isAuthenticated: true,
          userEmail: data.email,
          userPwd: data.password,
        }),
      );

      // save user info in Async Storage
      saveData(
        'userInfo',
        JSON.stringify({
          isAuthenticated: true,
          userEmail: data.email,
          userPwd: data.password,
        }),
      );

      // print current Async Storage
      logCurrentStorage('LoginScreen');
    }
  };

  // render form
  return (
    <View>
      <Text
        style={{
          fontSize: 40,
          textAlign: 'center',
          marginTop: 150,
          marginBottom: 60,
        }}>
        Login For More 🔥
      </Text>

      {/* input fields */}
      <Text style={styles.inputTitle}>Email</Text>
      <Input name="email" control={control} />
      <Text style={styles.inputTitle}>Password</Text>
      <Input name="password" control={control} />

      {/* submit button */}
      <Button title="Log Me In" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 70,
    backgroundColor: '#F5FCFF',
    margin: 20,
    paddingLeft: 30,
    paddingRight: 30,
    borderRadius: 20,
    fontSize: 20,
    fontStyle: 'italic',
  },
  errortext: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'red',
  },
  inputTitle: {
    fontWeight: 'bold',
    fontSize: 15,
    marginLeft: 30,
  },
});
