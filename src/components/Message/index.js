import React, {useState} from 'react';
import {Button, Text, View, ActivityIndicator} from 'react-native';

// redux
import {useDispatch, useSelector} from 'react-redux';
import {asyncLogoutSuccess} from '../../features/auth/slice';
import {show, hide} from '../../features/message/slice';

// selectors
import {emailSelector} from '../../features/auth/selectors';
import {contentSelector} from '../../features/message/selectors';

// custom alert
import {speak} from '../../utils/speak';

export const Message = ({navigation}) => {
  // indi states
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const dispatch = useDispatch();

  const emailGrabber = useSelector(emailSelector);
  const contentGrabber = useSelector(contentSelector);

  return (
    <View style={{flex: 1}}>
      <ActivityIndicator size="large" color="blue" animating={isLoggingIn} />
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 18,
          marginBottom: 10,
          marginTop: 20,
        }}>
        {contentGrabber}
      </Text>
      <Button
        title={'Say Greeting'}
        onPress={() => dispatch(show(`Hello ${emailGrabber} - from Redux ⚡️`))}
      />
      <Button title={'Hide Greeting'} onPress={() => dispatch(hide())} />
      <Button
        title="Log Out"
        onPress={() => {
          setIsLoggingIn(true);

          // redux logout
          dispatch(asyncLogoutSuccess())
            .unwrap()
            .then(asyncUnwrapResult => {
              // stop loading indicator
              setIsLoggingIn(false);

              speak('Status', `${asyncUnwrapResult}`, 'See ya!');
            })
            .catch(asyncUnwrapError => {
              // stop loading indicators
              setIsLoggingIn(false);

              // notify
              speak('Status', `${asyncUnwrapError.message}`, 'Try Again');
            });
        }}
      />
    </View>
  );
};
