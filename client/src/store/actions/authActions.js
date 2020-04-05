import axios from "axios";
import jwt_decode from 'jwt-decode';

import {GET_ERRORS, SET_CURRENT_USER} from './types';

//register user
export const registerUser = (userData) => {
  return dispatch => {
    axios
      .post('/api/users/register', userData)
      .then(res => console.log(res))
      .catch(err => {
        console.log('[Action work!]');
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data.message
        });
      });
  }
};


//login user
export const loginUser = (userData) => {
  return dispatch => {
    axios
      .post('/api/users/login', userData)
      .then(res => {
        console.log('[res data]', res.data);
        const { access_token } = res.data;
        console.log('[access_token]', access_token);
        localStorage.setItem('jwtaccess_token', access_token);
        const decoded = jwt_decode(access_token);
        dispatch(setCurrentUser(decoded));
      })
      .catch(err => {
        dispatch({
          type: GET_ERRORS,
          payload: 'Invalid username or password'
        })
      })
  }
}

export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  }
};