import React from 'react';
import { View, TextInput, ImageBackground, Image, Text } from 'react-native';
import Wbutton from '@app/components/Wbutton';
import loginButton from './components/loginButton';
import styles from './styles';

interface State {
  redirectHome: () => void;
  setEmail: (string: string) => void;
  setPwd: (string: string) => void;
  loading: boolean;
  hasError: boolean;
  inputError: boolean;
  validateEmail: () => void;
}

const LoginScreen = ({
  redirectHome,
  setEmail,
  setPwd,
  loading,
  hasError,
  inputError,
  validateEmail
}: State) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('@app/assets/general/bc_inicio.png')} style={styles.image}>
        <View style={styles.innerContainer}>
          <Image source={require('@assets/general/Group.png')} />
          <TextInput
            style={styles.text}
            onChangeText={setEmail}
            placeholder="Email"
            keyboardType="email-address"
            onEndEditing={validateEmail}
          />
          <Text style={styles.errorText}>{inputError ? 'Invalid Email' : ''}</Text>
          <TextInput
            style={styles.text}
            placeholder="password"
            autoCompleteType="password"
            onChangeText={setPwd}
            secureTextEntry={true}
            textContentType="password"
          />
          {loginButton(
            <Wbutton text={'INGRESAR'} inverted={true} whiteBorder={true} onPress={redirectHome} />,
            loading
          )}
          <Text style={styles.errorText}>{hasError ? 'Invalid Password or Email!' : ''}</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default LoginScreen;
