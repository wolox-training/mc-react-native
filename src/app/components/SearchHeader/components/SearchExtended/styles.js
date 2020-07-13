import { StyleSheet } from 'react-native';
import colors from '@constants/colors';
import { smallNumber } from '@constants/constants';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    alignItems: 'center',
    height: 40,
    borderRadius: 20
  },
  input: {
    width: 300
  },
  icon: {
    width: smallNumber,
    height: smallNumber,
    marginHorizontal: 10
  }
});

export default styles;
