import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { emailValidate, pwdValidate } from '@utils';
import LoginScreen from './layout';

function Login() {
  const [email, setEmail] = useState();
  const [pwd, setPwd] = useState();
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigation();
  const redirectHome = () => {
    // TODO: This is only for test the navigability, must be change later for a real authentication
    if (emailValidate(email) && pwdValidate(pwd)) {
      navigation.navigate('TabNavigator');
    }
    console.warn('Invalid Password or Email');
  };
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <LoginScreen
      redirectHome={redirectHome}
      setEmail={setEmail}
      setPwd={setPwd}
      handleShowPassword={handleShowPassword}
      showPassword={showPassword}
    />
  );
}

export default Login;
