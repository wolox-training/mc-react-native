const initialState = {
  fullComments: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'BOOK_TOOGLE_VIEW_ALL':
      return {
        fullComments: !state.fullComments
      };
    default:
      return state;
  }
}

export default reducer;
