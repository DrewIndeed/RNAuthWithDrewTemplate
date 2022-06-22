import React, {useEffect, useState} from 'react';
import {useController, useForm} from 'react-hook-form';
import {
  ActivityIndicator,
  Alert,
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

// redux
import {useDispatch, useSelector} from 'react-redux';
import {mainSelector} from '../redux/selectors';
// methods from auth slice
import {asyncLoginSuccess, asyncLoginError} from '../slices/authSlice';

// async storage
import AsyncStorage from '@react-native-async-storage/async-storage';
import logCurrentStorage from '../utils/logCurrentStorage';

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
  // indi states
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  // redux
  const dispatch = useDispatch();
  const grabber = useSelector(mainSelector);

  // print current storage
  useEffect(() => {
    console.log('at login');

    // AsyncStorage.clear();
    logCurrentStorage('LOGIN SCREEN');

    // if user logged in before, go to Home
    if (grabber.auth.isAuthenticated) {
      Alert.alert(
        'Status',
        `Welcome back, ${grabber.auth.asyncResponse.email}`, // if sync: grabber.auth.info.email
        [
          {
            text: "Let's Go",
            onPress: () => navigation.navigate('Home'),
          },
        ],
      );
    }
  }, []);

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
      // start animating loading indicator
      setIsLoggingIn(true);

      // redux login
      dispatch(
        // change this to asyncLoginError() to see error case
        asyncLoginSuccess({
          email: data.email,
          pwd: data.password,
        }),
      )
        .unwrap()
        .then(asyncUnwrapResult => {
          // stop loading indicator
          setIsLoggingIn(false);

          // reset form input values
          reset();

          // notify
          Alert.alert('Status', `Welcome back, ${asyncUnwrapResult.email}`, [
            {
              text: "Let's Go",
              onPress: () => {
                // go to Home
                navigation.navigate('Home');
              },
            },
          ]);
        })
        .catch(asyncUnwrapError => {
          // stop loading indicators
          setIsLoggingIn(false);

          // notify
          Alert.alert('Status', `${asyncUnwrapError.message}`, [
            {
              text: 'Try Again',
            },
          ]);
        });
    }
  };

  // render form
  return (
    <View style={styles.container}>
      {isLoggingIn ? (
        <View style={styles.indicatorContainer}>
          <ActivityIndicator
            size="large"
            color="#fff"
            animating={isLoggingIn}
          />
        </View>
      ) : (
        <Text style={styles.mainTitle}>Login For More</Text>
      )}

      {/* input fields */}
      <Text style={styles.inputTitle}>Email</Text>
      <Input name="email" control={control} />
      <Text style={styles.inputTitle}>Password</Text>
      <Input name="password" control={control} />

      {/* submit button */}
      <Button
        color="#fff"
        title="Log Me In"
        onPress={handleSubmit(onSubmit)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#4287f5',
    flex: 1,
    justifyContent: 'center',
  },
  indicatorContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  mainTitle: {
    width: '100%',
    fontSize: 40,
    textAlign: 'center',
    marginBottom: 60,
    color: '#fff',
  },
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
    color: 'white',
  },
});
