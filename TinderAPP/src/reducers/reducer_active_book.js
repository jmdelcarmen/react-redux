'use strict';

//state argument is not application state,
//only state of this container
export default function(state = null, action) {
  switch(action.type) {
    case 'BOOK_SELECTED':
      console.log(action.payload);
      return action.payload;
  }
  return state;
}
