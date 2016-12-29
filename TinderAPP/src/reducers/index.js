import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';

//mapping of state
const rootReducer = combineReducers({
  books: BooksReducer
});

export default rootReducer;
