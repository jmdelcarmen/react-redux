'use strict';

import { combineReducers } from 'redux';

//reducers
import PostsReducer from './reducer_posts';
import UniquePostReducer from './reducer_unique_post';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  posts: PostsReducer,
  uniquePost: UniquePostReducer,
  form: formReducer
});

export default rootReducer;
