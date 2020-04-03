import { DELETE_ERRORS } from './types';

export const alertDelete = () => {
  console.log('[Actions work?]');
  return {
    type: DELETE_ERRORS
  };
};