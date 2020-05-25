import { StyleSheet } from 'react-native';
import colors from '@constants/colors';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    marginVertical: 20,
    maxHeight: 50,
    maxWidth: 50
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5
  },
  description: {
    fontSize: 15,
    color: colors.tundora,
    textAlign: 'center',
    marginBottom: 5,
    maxWidth: 238
  }
});
