import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import styles from './styles';

const LogoutHeader = () => {
  return (
    <TouchableOpacity>
      <Image source={require('@assets/general/user.png')} style={styles.headerLeft} />
    </TouchableOpacity>
  );
};

export default LogoutHeader;
