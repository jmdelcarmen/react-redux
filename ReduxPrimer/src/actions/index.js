'use strict';
//action
export const BOOK_SELECTED = 'BOOK_SELECTED';
export function selectBook(book) {
  //selectBook is an action Creator
  //it needs to return an action, an object with a type property
  return {
    type: BOOK_SELECTED,
    payload: book
  };
}
