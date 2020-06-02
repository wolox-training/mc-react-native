import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { useNavigation, CommonActions } from '@react-navigation/native';
import { wipeLoginData } from '@localStore';
import { useDispatch } from 'react-redux';
import actionCreators from '@redux/login/actions';
import styles from './styles';

const LogoutHeader = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const logOut = () => {
    wipeLoginData();
    dispatch(actionCreators.clearLoginData());
    navigation.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [{ name: 'Login' }]
      })
    );
  };
  return (
    <TouchableOpacity onPress={logOut}>
      <Image source={require('@assets/general/user.png')} style={styles.headerLeft} />
    </TouchableOpacity>
  );
};

export default LogoutHeader;
