import { handleActions, handleAction } from 'redux-actions'
import { request, success, failure } from 'ui/action/top/initialize'

const defaultState = {
  isInitialized: false,
  feeds: []
};

export default function initialize(state = defaultState, action) {
  return handleActions({
    [request]: (state, action) => {
      return defaultState;
    },
    [success]: (state, action) => {
      return { isInitialized: true, feeds: action.payload.feeds };
    }
  }, defaultState)(state, action);
}
