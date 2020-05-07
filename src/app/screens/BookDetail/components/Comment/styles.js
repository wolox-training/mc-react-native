import { StyleSheet } from 'react-native';
import colors from '../../../../../constants/colors';

export default StyleSheet.create({
  container: {
    flex: 3,
    flexDirection: 'row',
    width: 335,
    borderRadius: 5,
    backgroundColor: colors.white,
    padding: 15
  },
  avatar: {
    height: 45,
    width: 45,
    resizeMode: 'contain',
    marginRight: 20
  },
  textContainer: {
    flex: 1,
    flexDirection: 'column'
  },
  userName: {
    fontSize: 15,
    fontWeight: 'bold',
    lineHeight: 18,
    color: colors.black,
    marginBottom: 5
  },
  comment: {
    fontSize: 15,
    color: colors.tundora,
    fontWeight: '300',
    lineHeight: 18,
    textAlign: 'left'
  }
});
