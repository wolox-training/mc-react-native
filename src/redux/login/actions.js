import { login, setHeaders } from '@services/bookService';
import { setLoginData } from '@localStore';

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
      const token = response.headers['access-token'];
      const { client, uid } = response.headers;
      setLoginData(token, client, uid);
      setHeaders(token, client, uid);
      dispatch({
        type: actions.SIGN_IN_SUCCESS,
        payload: {
          token,
          client,
          uid,
          waitingResponse: false,
          error: ''
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
  },
  setTokenFromStore: (data) => (dispatch) => {
    const { accessToken, client, uid } = data;
    setHeaders(accessToken, client, uid);
    dispatch({
      type: actions.SIGN_IN_SUCCESS,
      payload: {
        token: accessToken,
        client,
        uid,
        waitingResponse: false,
        error: ''
      }
    });
  }
};

export default actionCreators;
