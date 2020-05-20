import React from 'react';
import { ActivityIndicator } from 'react-native';
import colors from '@constants/colors';

const loginButton = (component: any, loading: boolean) => {
  if (loading) {
    return <ActivityIndicator size={45} color={colors.polar} />;
  }
  return component;
};

export default loginButton;
