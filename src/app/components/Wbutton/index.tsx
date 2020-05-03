import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './styles';

interface Props {
  text: string;
  inverted?: boolean;
}
const Wbutton = ({ text, inverted = false }: Props) => {
  const buttonType = inverted ? [styles.button, styles.inverted] : styles.button;
  const textType = inverted ? [styles.text, styles.inverted] : styles.text;

  return (
    <TouchableOpacity style={buttonType}>
      <Text style={textType}> {text} </Text>
    </TouchableOpacity>
  );
};

export default Wbutton;
