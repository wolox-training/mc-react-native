import { StyleSheet } from 'react-native';
import colors from '@constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  innerContainer: {
    flex: 1,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center'
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center'
  },
  text: {
    color: colors.dustyGrey,
    fontSize: 30,
    textAlign: 'left',
    fontWeight: 'bold',
    width: 275,
    margin: 10
  },
  errorText: {
    color: colors.red,
    fontSize: 14,
    textAlign: 'center'
  }
});

export default styles;
