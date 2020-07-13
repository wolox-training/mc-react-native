import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './styles';

interface Props {
  text: string;
  inverted?: boolean;
  whiteBorder?: boolean;
  gradiantSet?: boolean;
  onPress?: (event: object) => void;
}
const Wbutton = ({ text, inverted = false, whiteBorder = false, gradiantSet = false, onPress }: Props) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        inverted && styles.inverted,
        whiteBorder && styles.whiteBorder,
        gradiantSet && styles.forGradiant
      ]}
      onPress={onPress}>
      <Text style={[styles.text, inverted && styles.inverted]}> {text} </Text>
    </TouchableOpacity>
  );
};

export default Wbutton;
