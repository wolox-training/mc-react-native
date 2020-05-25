import { StyleSheet } from 'react-native';
import colors from '@constants/colors';

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
    width: 15,
    height: 15,
    marginHorizontal: 10
  }
});

export default styles;
