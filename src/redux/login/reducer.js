const initialState = {
  token: undefined
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SIGN_IN':
      return {
        token: action.payload
      };
    case 'SIGN_IN_SUCCESS':
      return {
        token: action.payload
      };
    case 'SIGN_IN_FAILURE':
      return {
        token: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
