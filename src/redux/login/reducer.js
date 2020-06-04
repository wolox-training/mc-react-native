const initialState = {
  client: '',
  uid: '',
  token: null,
  waitingResponse: false,
  error: null
};

const reducer = (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case 'SIGN_IN':
      return {
        waitingResponse: payload.waitingResponse
      };
    case 'SIGN_IN_SUCCESS':
      return {
        token: payload.token,
        client: payload.client,
        uid: payload.uid,
        waitingResponse: payload.waitingResponse,
        error: payload.error
      };
    case 'SIGN_IN_FAILURE':
      return {
        waitingResponse: payload.waitingResponse,
        error: payload.error
      };
    default:
      return state;
  }
};

export default reducer;
