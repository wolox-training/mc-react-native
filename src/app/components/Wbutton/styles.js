import { StyleSheet } from 'react-native';
import colors from '../../../constants/colors';

export default StyleSheet.create({
  button: {
    backgroundColor: colors.white,
    borderColor: colors.cerulean,
    borderRadius: 100,
    borderWidth: 1,
    borderStyle: 'solid',
    width: 275,
    height: 44,
    alignSelf: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 15,
    lineHeight: 19,
    fontWeight: 'bold',
    letterSpacing: 0,
    textAlign: 'center',
    alignSelf: 'center',
    color: colors.cerulean
  },
  inverted: {
    backgroundColor: colors.cerulean,
    borderColor: colors.cerulean,
    color: colors.white
  }
});
