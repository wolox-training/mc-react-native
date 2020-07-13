import AsyncStorage from '@react-native-community/async-storage';

const [tokenKey, clientKey, uidKey] = ['@accessToken', '@client', '@uid'];

export const setLoginData = (accessToken: string, client: string, uid: string) => {
  const accessTokenPair = [tokenKey, accessToken];
  const clientPair = [clientKey, client];
  const uidPair = [uidKey, uid];
  try {
    AsyncStorage.multiSet([accessTokenPair, clientPair, uidPair]);
  } catch (e) {
    console.log(`Error trying save data: ${e}`);
  }

  console.log('Login Data Save');
};

export const getLoginData = async () => {
  const [accessToken, client, uid] = (await AsyncStorage.multiGet([tokenKey, clientKey, uidKey])).map(
    (pairOfValues) => pairOfValues[1]
  );

  const data = {
    accessToken,
    client,
    uid
  };

  return data;
};

export const wipeLoginData = async () => {
  const keys = [tokenKey, clientKey, uidKey];
  await AsyncStorage.multiRemove(keys);
};
