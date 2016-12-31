'use strict';

import { FETCH_WEATHER } from '../actions/index';

export default function (state = [], action) {
  switch(action.type) {
    case FETCH_WEATHER:
    //redux-promise middlware at work
    // return state.unshift(action.payload.data); <--- never do this
    //flattens out data 
    return [ action.payload.data, ...state ] // return new version of state
  }
  return state;
}
