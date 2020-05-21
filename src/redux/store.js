import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import bookReducer from './books/reducer';
import loginReducer from './login/reducer';

const reducers = combineReducers({
  loginReducer,
  bookReducer
});

export default createStore(reducers, applyMiddleware(thunk));
