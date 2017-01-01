'use strict';

import { BOOK_SELECTED } from '../actions/index';
//state argument is not application state,
//only state of this container
export default function(state = null, action) {
  switch(action.type) {
    case BOOK_SELECTED:
      return action.payload;
  }
  return state;
}
