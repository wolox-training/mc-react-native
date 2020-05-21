import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import actionCreators from '@redux/login/actions';
import { emailValidate, pwdValidate } from '@utils';
import { getLoginData } from '@localStore';
import LoginScreen from './layout';
import { State, StorageLoginData } from '../../interfaces';

function Login() {
  const [email, setEmail] = useState();
  const [pwd, setPwd] = useState();
  const [inputError, setInputError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const signIn = () => dispatch(actionCreators.signIn(email, pwd));
  const hasToken = !!useSelector<State, string>((state) => state.loginReducer.token);
  const stillLoading = useSelector<State, boolean>((state) => state.loginReducer.waitingResponse);
  const hasError = !!useSelector<State, string>((state) => state.loginReducer.error);
  const redirectHome = () => {
    if (emailValidate(email) && pwdValidate(pwd)) {
      signIn();
    } else {
      setInputError(true);
    }
  };

  const validateEmail = () => (emailValidate(email) ? setInputError(false) : setInputError(true));

  useEffect(() => {
    getLoginData().then((data: StorageLoginData) => {
      if (data.accessToken) {
        dispatch(actionCreators.setTokenFromStore(data));
        navigation.navigate('TabNavigator');
      }
    });
    if (hasToken) {
      navigation.navigate('TabNavigator');
    }
  });

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <LoginScreen
      redirectHome={redirectHome}
      setEmail={setEmail}
      setPwd={setPwd}
      loading={stillLoading}
      hasError={hasError}
      inputError={inputError}
      validateEmail={validateEmail}
      handleShowPassword={handleShowPassword}
      showPassword={showPassword}
    />
  );
}

export default Login;
