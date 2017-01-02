'use strict';
import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS'; //action type

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=asfdk1k3o1okadoskf';

export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts/${API_KEY}`);
  return {
    type: FETCH_POSTS,
    payload: request //redux promise will unwrap the promise
  }
}
