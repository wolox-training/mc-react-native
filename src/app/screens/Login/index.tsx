import React from 'react';
import { useNavigation } from '@react-navigation/native';
import LoginScreen from './layout';

function Login() {
  const navigation = useNavigation();
  const redirectHome = () => {
    // TODO: This is only for test the navigability, must be change later for a real authentication
    navigation.navigate('TabNavigator');
  };
  return <LoginScreen redirectHome={redirectHome} />;
}

export default Login;
