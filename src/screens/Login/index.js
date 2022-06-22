import React, {useEffect, useState} from 'react';
import {useController, useForm} from 'react-hook-form';
import {
  ActivityIndicator,
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

// redux
import {useDispatch, useSelector} from 'react-redux';
import {rootSelector} from '../../config/store/rootSelector';

// methods from auth slice
import {asyncLoginSuccess} from '../../../features/authSlice';

// async storage
import printallAsyncStorage from '../../utils/printallAsyncStorage';

// custom alert
import {speak} from '../../utils/speak';

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
  const grabber = useSelector(rootSelector);

  // print current storage
  useEffect(() => {
    console.log('at login');

    // AsyncStorage.clear();
    printallAsyncStorage('LOGIN SCREEN');

    // if user logged in before, go to Home
    if (grabber.auth.isAuthenticated) {
      speak(
        'Status',
        `Welcome back, ${grabber.auth.asyncResponse.email}`,
        "Let's Go",
        () => navigation.navigate('HomeNavigator'),
      );
    }
  }, []);

  // react hook form init
  const {control, handleSubmit, reset} = useForm();

  // handle submit
  const onSubmit = data => {
    if (data.email.length === 0) {
      // if email is blank
      speak('Status', `Email is required`, 'OK');
    } else if (data.password.length === 0) {
      // if passowrd is blank
      speak('Status', `Password is required`, 'OK');
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
          speak(
            'Status',
            `Welcome back, ${asyncUnwrapResult.email}`,
            "Let's Go",
            () => navigation.navigate('HomeNavigator'),
          );
        })
        .catch(asyncUnwrapError => {
          // stop loading indicators
          setIsLoggingIn(false);

          // notify
          speak('Status', `${asyncUnwrapError.message}`, 'Try Again');
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
      <Button color="#fff" title="Log Me In" onPress={handleSubmit(onSubmit)} />
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
