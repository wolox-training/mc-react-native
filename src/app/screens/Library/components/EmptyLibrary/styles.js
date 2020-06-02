import { StyleSheet } from 'react-native';
import colors from '@constants/colors';
import { bigNumber } from '@constants/constants';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    marginVertical: 20,
    maxHeight: bigNumber,
    maxWidth: bigNumber
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
