import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './styles';

interface Props {
  text: string;
  inverted?: boolean;
}
const Wbutton = ({ text, inverted = false }: Props) => {
  return (
    <TouchableOpacity style={[styles.button, inverted && styles.inverted]}>
      <Text style={[styles.text, inverted && styles.inverted]}> {text} </Text>
    </TouchableOpacity>
  );
};

export default Wbutton;
