import { createAction } from 'redux-actions'

export const request = createAction('INITIALIZE_REQUEST');

export const success = createAction('INITIALIZE_SUCCESS', (entries = []) => {
  return {
    entries: entries
  };
});

export const failure = createAction('INITIALIZE_FAILURE');
