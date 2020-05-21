import AsyncStorage from '@react-native-community/async-storage';

export const setLoginData = (accessToken: string, client: string, uid: string) => {
  const accessTokenPair = ['@accessToken', accessToken];
  const clientPair = ['@client', client];
  const uidPair = ['@uid', uid];
  try {
    AsyncStorage.multiSet([accessTokenPair, clientPair, uidPair]);
  } catch (e) {
    console.log(`Error trying save data: ${e}`);
  }

  console.log('Login Data Save');
};

export const getLoginData = async () => {
  const [accessToken, client, uid] = (await AsyncStorage.multiGet(['@accessToken', '@client', '@uid'])).map(
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
  const keys = ['@accessToken', '@client', '@uid'];
  await AsyncStorage.multiRemove(keys);
};
