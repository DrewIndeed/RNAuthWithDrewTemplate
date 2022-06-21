import React from 'react';
import {Text, View, TextInput, Button, StyleSheet, Alert} from 'react-native';
import {useForm, useController} from 'react-hook-form';

import {useDispatch} from 'react-redux';
import {userLogin} from '../redux/actions';

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
  const dispatch = useDispatch();

  // react hook form init
  const {control, handleSubmit, reset} = useForm();

  const loginHandler = data => {
    try {
      dispatch(
        userLogin({
          isAuthenticated: true,
          userEmail: data.email,
          userPwd: data.password,
        }),
      );

      Alert.alert('Status', `Welcome back, ${data.email}`, [
        {
          text: "Let's Go",
          onPress: () => {
            navigation.navigate('Home');
            reset();
          },
        },
      ]);
    } catch (error) {
      console.log(error);
    }
  };

  // handle submit
  const onSubmit = data => {
    if (data.email.length === 0) {
      Alert.alert('Status', 'Email is required!', [
        {
          text: 'OK',
        },
      ]);
    } else if (data.password.length === 0) {
      Alert.alert('Status', 'Password is required!', [
        {
          text: 'OK',
        },
      ]);
    } else {
      loginHandler(data);
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
