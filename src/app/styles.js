import { StyleSheet } from 'react-native';
import colors from '../constants/colors';

export default StyleSheet.create({
  imageHeader: {
    resizeMode: 'stretch',
    width: '100%'
  },
  headerStyle: {
    height: 102
  },
  headerCard: {
    backgroundColor: colors.polar
  },
  headerTitle: {
    color: colors.white,
    fontSize: 17,
    fontWeight: '600',
    lineHeight: 20
  },
  backImage: {
    maxHeight: 20,
    maxWidth: 20
  }
});
