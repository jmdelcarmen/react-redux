import { combineReducers } from 'redux';

//reducers
import UsersReducer from './users';

const rootReducer = combineReducers({
  users: UsersReducer
});

export default rootReducer;
