import { index } from '@services/bookService';

export const actionTypes = {
  GET_BOOKS: 'GET_BOOKS',
  GET_BOOKS_SUCCESS: 'GET_BOOKS_SUCCESS',
  GET_BOOKS_FAILURE: 'GET_BOOKS_FAILURE',
  SET_FOUND_BOOKS: 'SET_FOUND_BOOKS'
};

const privateBookActions = {
  getBooksSuccess: (books) => ({ type: actionTypes.GET_BOOKS_SUCCESS, target: 'books', payload: books }),
  getBooksFailure: (error) => ({ type: actionTypes.GET_BOOKS_FAILURE, target: 'booksError', payload: error }),
  setFoundBooks: (books) => ({ type: actionTypes.SET_FOUND_BOOKS, target: 'booksFiltered', payload: books })
};

export const bookActions = {
  getBooks: () => async (dispatch) => {
    dispatch({ type: actionTypes.GET_BOOKS, target: 'books' });
    const response = await index();
    if (response.ok) {
      dispatch(privateBookActions.getBooksSuccess(response.data));
    } else {
      dispatch(privateBookActions.getBooksFailure(response.error));
    }
  },
  booksFiltered: (dispatch, result) => () => {
    dispatch(privateBookActions.setFoundBooks(result));
  },
  wipeBooksFiltered: (dispatch) => () => {
    dispatch(privateBookActions.setFoundBooks([]));
  },
};

export default bookActions;
