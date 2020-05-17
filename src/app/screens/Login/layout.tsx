import React from 'react';
import { View, TextInput, ImageBackground, Image } from 'react-native';
import Wbutton from '@app/components/Wbutton';
import styles from './styles';

interface State {
  redirectHome: Function;
  setEmail: Function;
  setPwd: Function;
}

const LoginScreen = ({ redirectHome, setEmail, setPwd }: State) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('@app/assets/general/bc_inicio.png')} style={styles.image}>
        <View style={styles.innerContainer}>
          <Image source={require('@assets/general/Group.png')} />
          <TextInput
            style={styles.text}
            textAlign="center"
            onChangeText={setEmail}
            placeholder="Email"
            keyboardType="email-address"
          />
          <TextInput
            style={styles.text}
            placeholder="password"
            autoCompleteType="password"
            textAlign="center"
            onChangeText={setPwd}
            secureTextEntry={true}
            textContentType="password"
          />
          <Wbutton text={'INGRESAR'} inverted={true} whiteBorder={true} onPress={redirectHome} />
        </View>
      </ImageBackground>
    </View>
  );
};

export default LoginScreen;
