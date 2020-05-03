import { StyleSheet } from 'react-native';
import colors from '../../../../../constants/colors';

export default StyleSheet.create({
  cover: {
    height: 105,
    width: 69,
    maxHeight: '100%',
    maxWidth: '100%'
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    height: '100%',
    width: '100%',
    maxHeight: 270,
    maxWidth: 335,
    borderRadius: 5,
    backgroundColor: colors.white,
    justifyContent: 'space-evenly'
  },
  containerShadow: {
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.25,
    shadowRadius: 1,
    elevation: 1
  },
  top: {
    flex: 1,
    flexDirection: 'row',
    height: '100%',
    width: '100%',
    maxHeight: 105,
    maxWidth: 285,
    marginTop: 15,
    marginRight: 20,
    margin: 30,
    justifyContent: 'center'
  },
  description: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    marginLeft: 20,
    maxHeight: 111,
    maxWidth: 196,
    height: '100%',
    width: '100%'
  },
  title: {
    fontWeight: 'bold',
    height: 25,
    width: '100%',
    fontFamily: 'SF UI Text',
    fontSize: 22,
    letterSpacing: -0.58,
    lineHeight: 25
  },
  bookStatus: {
    fontWeight: 'bold',
    color: colors.atlantis
  },
  text: {
    fontSize: 15,
    lineHeight: 18
  }
});
