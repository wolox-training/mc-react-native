import { login } from '@services/bookService';

export const actions = {
  SIGN_IN: 'SIGN_IN',
  SIGN_IN_SUCCESS: 'SIGN_IN_SUCCESS',
  SIGN_IN_FAILURE: 'SIGN_IN_FAILURE'
};

const actionCreators = {
  signIn: (email, pwd) => async (dispatch) => {
    dispatch({ type: actions.SIGN_IN });
    const response = await login(email, pwd);
    if (response.ok) {
      // TODO: all actions make the same thing, this will be change when I need store data (in another card)
      dispatch({
        type: actions.SIGN_IN_SUCCESS,
        payload: response.ok
      });
    } else {
      dispatch({
        type: actions.SIGN_IN_FAILURE,
        payload: response.ok
      });
    }
  }
};

export default actionCreators;
