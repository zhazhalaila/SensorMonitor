import { GET_ERRORS, DELETE_ERRORS } from '../actions/types';

const initialState = {
  open: false,
  color: 'error',
  message: ''
};

const reducer = (state = initialState, action) => {
  console.log('[Action]', action);
  switch (action.type) {
    case GET_ERRORS:
      return {
        ...state,
        open: true,
        message: action.payload
      };
    case DELETE_ERRORS:
      return {
        ...state,
        open: false
      };
    default:
      return state
  }
};

export default reducer;