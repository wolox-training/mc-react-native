import { actions } from '@redux/login/actions';
import authReducer, { initialState } from '@redux/login/reducer';

describe('Login reducers', () => {
  test('test reducer success', () => {
    const action = {
      type: actions.SIGN_IN_SUCCESS,
      payload: {
        token: 'token',
        client: 'client',
        uid: 'a@a.com',
        waitingResponse: false,
        error: ''
      }
    };
    expect(authReducer(undefined, action)).toEqual({
      ...initialState,
      token: action.payload.token,
      client: action.payload.client,
      uid: action.payload.uid,
      waitingResponse: action.payload.waitingResponse,
      error: action.payload.error
    });
  });
  test('test reducer Failure', () => {
    const action = {
      type: actions.SIGN_IN_FAILURE,
      payload: {
        waitingResponse: false,
        error: 'Error'
      }
    };
    expect(authReducer(undefined, action)).toEqual({
      waitingResponse: action.payload.waitingResponse,
      error: action.payload.error
    });
  });
  test('test reducer wipe login', () => {
    const action = {
      type: actions.WIPE_LOGIN,
      payload: initialState
    };
    expect(authReducer(undefined, action)).toEqual({
      ...initialState,
      token: action.payload.token,
      client: action.payload.client,
      uid: action.payload.uid,
      waitingResponse: action.payload.waitingResponse,
      error: action.payload.error
    });
  });
});
