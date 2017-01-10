import axios from 'axios';
import { browserHistory } from 'react-router';
import { 
    AUTH_USER,
    UNAUTH_USER,
    AUTH_ERROR
 } from './types';

const ROOT_URL = 'http://localhost:3000'; //api server/ node server

export function signInUser({email, password}) {
    return (dispatch) => { //redux thunk allows an action creator to return a function
    axios.post(`${ROOT_URL}/signin`, {email, password}) //submit email/password to our api server
        //if request is good
        .then(response => {
            //update state to indicate user is authed
            dispatch({ type: AUTH_USER }); 
            //save JWT token to Local Storage
            localStorage.setItem('token', response.data.token);
            //redirect to route '/feature'
            browserHistory.push('/feature');
        })
        //if request is bad, show error
        .catch(err => {
            dispatch(authError('Bad Login Info'));
        });
    }
}

export function authError(err) {
    return {
        type: AUTH_ERROR,
        payload: err
    };
}

export function signOutUser() {
    localStorage.removeItem('token'); //remove token from localStorage
    return {
        type: UNAUTH_USER
    };
}

export function signUpUser({ email, password }) {
    return (dispatch) => {
        axios.post(`${ROOT_URL}/signup`, { email, password })
            .then(response => {
                dispatch({ type: AUTH_USER }); 
                localStorage.setItem('token', response.data.token);
                browserHistory.push('/feature');
            })
            .catch(err => {
                dispatch(authError(err.response.data.error));
            });
    }
}