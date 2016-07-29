import { handleActions, handleAction } from 'redux-actions'
import { request, success, failure } from 'ui/action/top/initialize'

const defaultState = {
  isInitialized: false,
  entries: []
};

export default function initialize(state = defaultState, action) {
  return handleActions({
    [request]: (state, action) => {
      return {
        isInitialized: false,
        entries: []
      };
    },
    [success]: (state, action) => {
      return {
        isInitialized: true,
        entries: action.payload.entries
      };
    }
  }, state)(state, action);
}
