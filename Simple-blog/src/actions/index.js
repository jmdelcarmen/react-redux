'use strict';

import axios from 'axios';
import { browserHistory } from 'react-router';

export const FETCH_POSTS = 'FETCH_POSTS'; //action type
export const CREATE_POST = 'CREATE_POST'; //action type
export const GET_POST = 'GET_POST'; //action type
export const DELETE_POST = 'DELETE_POST'; //action type

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=asfdk1k3o1okadoskf';

export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts/${API_KEY}`);
  return {
    type: FETCH_POSTS,
    payload: request //redux promise will unwrap the promise
  }
}

export function createPost(props) { //{ title, categories, content } === props
  const request = axios.post(`${ROOT_URL}/posts/${API_KEY}`, props); //pass props as 2nd argument
  browserHistory.push('/');//post successfully created;
  return {
   type: CREATE_POST,
   payload: request
  }
}

export function getPost(id) {
  const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);
  return {
   type: GET_POST,
   payload: request
  }
}

export function deletePost(id) {
  const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`);
  browserHistory.push('/');//post successfully deleted;
  return {
   type: GET_POST,
   payload: request
  }
}
