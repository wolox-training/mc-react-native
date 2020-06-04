import { login } from '@services/bookService';

export const actions = {
  SIGN_IN: 'SIGN_IN',
  SIGN_IN_SUCCESS: 'SIGN_IN_SUCCESS',
  SIGN_IN_FAILURE: 'SIGN_IN_FAILURE'
};

const actionCreators = {
  signIn: (email, pwd) => async (dispatch) => {
    const waitingResponse = true;
    dispatch({ type: actions.SIGN_IN, payload: { waitingResponse } });
    const response = await login(email, pwd);
    if (response.ok) {
      dispatch({
        type: actions.SIGN_IN_SUCCESS,
        payload: {
          token: response.headers['access-token'],
          waitingResponse: false,
          error: null
        }
      });
    } else {
      dispatch({
        type: actions.SIGN_IN_FAILURE,
        payload: {
          error: `Status ${response.status}: ${response.problem}`,
          waitingResponse: false
        }
      });
    }
  }
};

export default actionCreators;
