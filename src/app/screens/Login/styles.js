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
    fontWeight: 'bold',
    width: 275
  },
  passwordContainer: {
    flex: 1,
    flexDirection: 'row',
    maxHeight: 80
  },
  logoImage: {
    marginBottom: 100
  }
});

export default styles;
