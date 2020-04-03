import axios from "axios";

import {GET_ERRORS} from './types';

export const registerUser = (userData) => {
  return dispatch => {
    axios
    .post("/api/users/register", userData)
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