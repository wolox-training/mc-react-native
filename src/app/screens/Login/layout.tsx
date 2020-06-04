import React from 'react';
import { View, TextInput, ImageBackground, Image, Text } from 'react-native';
import Wbutton from '@app/components/Wbutton';
import loginButton from './components/loginButton';
import ShowPassword from './components';
import styles from './styles';

interface State {
  redirectHome: () => void;
  setEmail: (string: string) => void;
  setPwd: (string: string) => void;
  loading: boolean;
  hasError: boolean;
  inputError: boolean;
  validateEmail: () => void;
  showPassword: boolean;
  handleShowPassword: () => void;
}

const LoginScreen = ({
  redirectHome,
  setEmail,
  setPwd,
  loading,
  hasError,
  inputError,
  validateEmail,
  showPassword,
  handleShowPassword
}: State) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('@app/assets/general/bc_inicio.png')} style={styles.image}>
        <View style={styles.innerContainer}>
          <Image source={require('@assets/general/Group.png')} style={styles.logoImage} />
          <TextInput
            style={styles.text}
            onChangeText={setEmail}
            placeholder="Email"
            keyboardType="email-address"
            onEndEditing={validateEmail}
          />
          <Text style={styles.errorText}>{inputError ? 'Invalid Email' : ''}</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.text}
              placeholder="password"
              autoCompleteType="password"
              onChangeText={setPwd}
              secureTextEntry={!showPassword}
              textContentType="password"
            />
            <ShowPassword onShowPassword={handleShowPassword} passwordVisible={showPassword} />
          </View>
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
