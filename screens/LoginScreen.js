import React from 'react';
import {useController, useForm} from 'react-hook-form';
import {Alert, Button, StyleSheet, Text, TextInput, View} from 'react-native';

import {useDispatch} from 'react-redux';
import {login} from '../slices/authSlice';

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
  // redux
  const dispatch = useDispatch();

  // react hook form init
  const {control, handleSubmit, reset} = useForm();

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
      try {
        // redux login
        dispatch(
          login({
            email: data.email,
            pwd: data.password,
          }),
        );

        // reset form values
        reset();

        // go to Home
        navigation.navigate('Home');
      } catch (error) {
        console.log(error);
      }
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
