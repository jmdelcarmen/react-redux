'use strict';

import axios from 'axios';

const API_KEY = '';
//action type
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const urlString = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}`;
  const request = axios.get(urlString);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
