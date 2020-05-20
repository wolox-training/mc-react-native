const initialState = {
  token: '',
  waitingResponse: false,
  error: ''
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
