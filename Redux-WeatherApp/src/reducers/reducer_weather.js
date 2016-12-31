'use strict';

import { FETCH_WEATHER } from '../actions/index';

export default function (state = null, action) {
  switch(action.type) {
    case FETCH_WEATHER:
    //redux-promise middlware at work
      return action.payload.data;
  }
  return state;
}
