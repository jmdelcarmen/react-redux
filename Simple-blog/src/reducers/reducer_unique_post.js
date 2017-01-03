'use strict';

import { GET_POST, DELETE_POST } from '../actions/index';

export default function (state = null, action) {
  switch(action.type) {
    case GET_POST:
      return action.payload.data;
    case DELETE_POST:
      return state;
  }
  return state;
}
