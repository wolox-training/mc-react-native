import React from 'react';
import { View, TextInput, ImageBackground, Image } from 'react-native';
import Wbutton from '@app/components/Wbutton';
import ShowPassword from './components';
import styles from './styles';

interface State {
  redirectHome: Function;
  setEmail: Function;
  setPwd: Function;
  showPassword: boolean;
  handleShowPassword: () => void;
}

const LoginScreen = ({ redirectHome, setEmail, setPwd, showPassword, handleShowPassword }: State) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('@app/assets/general/bc_inicio.png')} style={styles.image}>
        <View style={styles.innerContainer}>
          <Image source={require('@assets/general/Group.png')} style={styles.logoImage} />
          <TextInput
            style={styles.text}
            textAlign="center"
            onChangeText={setEmail}
            placeholder="Email"
            keyboardType="email-address"
          />
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.text}
              placeholder="password"
              autoCompleteType="password"
              textAlign="center"
              onChangeText={setPwd}
              secureTextEntry={!showPassword}
              textContentType="password"
            />
            <ShowPassword onShowPassword={handleShowPassword} passwordVisible={showPassword} />
          </View>
          <Wbutton text={'INGRESAR'} inverted={true} whiteBorder={true} onPress={redirectHome} />
        </View>
      </ImageBackground>
    </View>
  );
};

export default LoginScreen;
