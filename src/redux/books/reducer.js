import { createReducer, completeReducer } from 'redux-recompose';
import { actionTypes } from './actions';

const initialState = {
  books: [],
  booksLoading: false,
  booksError: null
};

const reducerDescription = {
  primaryActions: [actionTypes.GET_BOOKS]
};

export default createReducer(initialState, completeReducer(reducerDescription));
