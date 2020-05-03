import { StyleSheet } from 'react-native';
import colors from '../../../../../constants/colors';

export default StyleSheet.create({
  bookContainer: {
    alignSelf: 'center',
    backgroundColor: colors.white,
    borderRadius: 5,
    flex: 1,
    flexDirection: 'row',
    height: '100%',
    justifyContent: 'center',
    maxHeight: 90,
    maxWidth: 335,
    padding: 15,
    width: '100%'
  },
  cover: {
    height: 60,
    marginLeft: 15,
    width: 40,
    resizeMode: 'contain'
  },
  description: {
    alignItems: 'flex-start',
    flex: 1,
    flexDirection: 'column',
    marginLeft: 19,
    paddingBottom: 3
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
    lineHeight: 20
  },
  author: {
    fontSize: 15,
    lineHeight: 18
  }
});
