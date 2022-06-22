import {Alert} from 'react-native';

export const speak = (title, msg, pressText, pressFunc = () => {}) => {
  Alert.alert(title, msg, [
    {
      text: pressText,
      onPress: pressFunc,
    },
  ]);
};
