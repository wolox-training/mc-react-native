import { createStore } from 'redux';
import reducer from './books/reducer';

// TODO: Restore when I have multiple reducer.
export default createStore(reducer);
