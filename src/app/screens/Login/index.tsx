import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { emailValidate, pwdValidate } from '@utils';
import actionCreators from '@redux/login/actions';
import LoginScreen from './layout';

function Login() {
  const [email, setEmail] = useState();
  const [pwd, setPwd] = useState();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const signIn = () => dispatch(actionCreators.signIn(email, pwd));
  const status = useSelector((state) => state.loginReducer.token);
  const redirectHome = () => {
    // TODO: This is only for test the navigability, must be change later for a real authentication
    if (emailValidate(email) && pwdValidate(pwd)) {
      signIn();
    } else {
      console.warn('Invalid Password or Email');
    }
  };

  useEffect(() => {
    if (status) {
      navigation.navigate('TabNavigator');
    }
  });

  return <LoginScreen redirectHome={redirectHome} setEmail={setEmail} setPwd={setPwd} />;
}

export default Login;
