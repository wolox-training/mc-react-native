import { StyleSheet } from 'react-native';
import colors from '../constants/colors';
import { squareSmall } from '../constants/globalStyles';

export default StyleSheet.create({
  imageHeader: {
    resizeMode: 'stretch',
    width: '100%'
  },
  tabIcons: {
    resizeMode: 'stretch'
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
  squareSmall
});
