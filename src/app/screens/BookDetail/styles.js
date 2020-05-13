import { StyleSheet } from 'react-native';
import colors from '../../../constants/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: 20,
    height: 565,
    alignItems: 'center',
    backgroundColor: colors.polar,
    marginTop: 20
  },
  linkContainer: {
    backgroundColor: colors.white,
    alignItems: 'center',
    height: 34
  },
  linkText: {
    fontSize: 15,
    lineHeight: 18,
    color: colors.cerulean
  },
  commentList: {
    flex: 2,
    justifyContent: 'flex-start'
  },
  listFooter: {
    paddingBottom: 10
  }
});
