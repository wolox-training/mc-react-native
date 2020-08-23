import { createReducer, completeReducer } from 'redux-recompose';
import { actionTypes } from './actions';

const initialState = {
  books: [],
  booksFiltered: [],
  booksLoading: false,
  booksError: null
};

const reducerDescription = {
  primaryActions: [actionTypes.GET_BOOKS],
  override: {
    [actionTypes.SET_FOUND_BOOKS]: (state, action) => ({ ...state, booksFiltered: action.payload })
  }
};

export default createReducer(initialState, completeReducer(reducerDescription));
