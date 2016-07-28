import { createAction } from 'redux-actions'

export function request() { return createAction('INITIALIZE_REQUEST'); }
export function success() { return createAction('INITIALIZE_SUCCESS'); }
export function failure() { return createAction('INITIALIZE_FAILURE'); }
