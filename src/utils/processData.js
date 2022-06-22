import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveData = async (storeKey, storeValue) => {
  try {
    await AsyncStorage.setItem(storeKey, storeValue);
  } catch (error) {
    console.log(error);
  }
};

export const readData = async storeKey => {
  try {
    const userInfo = await AsyncStorage.getItem(storeKey);
    console.log(`Read: ${userInfo}`);
  } catch (error) {
    console.log(error);
  }
};

export const getData = async storeKey => {
  try {
    const userInfo = await AsyncStorage.getItem(storeKey);
    console.log(`Get: ${userInfo}`);
    return userInfo;
  } catch (error) {
    console.log(error);
  }
};

export const removeData = async storeKey => {
  try {
    await AsyncStorage.removeItem(storeKey);
    console.log(`Removed: ${storeKey}`);
  } catch (error) {
    console.log(error);
  }
};
