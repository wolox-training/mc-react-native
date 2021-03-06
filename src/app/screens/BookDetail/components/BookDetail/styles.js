import { StyleSheet } from 'react-native';
import colors from '../../../../../constants/colors';

export default StyleSheet.create({
  cover: {
    maxHeight: 105,
    maxWidth: 69,
    resizeMode: 'contain'
  },
  container: {
    flex: 2,
    flexDirection: 'column',
    maxHeight: 270,
    maxWidth: 335,
    borderRadius: 5,
    backgroundColor: colors.white,
    marginBottom: 10
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
    maxWidth: 196
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
  },
  fullScreen: {
    height: '100%',
    width: '100%'
  },
  gradient: {
    borderRadius: 100,
    borderWidth: 1,
    borderStyle: 'solid',
    width: 275,
    height: 44,
    alignSelf: 'center',
    justifyContent: 'center'
  }
});
