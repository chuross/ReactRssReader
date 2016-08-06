import { createAction } from 'redux-actions'
import FeedlyApi from 'infrastructure/feedly/FeedlyApi'

export const request = createAction('INITIALIZE_REQUEST');

export const success = createAction('INITIALIZE_SUCCESS', (feeds = []) => {
  return { feeds: feeds };
});

export const failure = createAction('INITIALIZE_FAILURE');

export function execute() {
  return (dispatch, getState) => {
    dispatch(request());
    return FeedlyApi.getFeeds('Overwatch')
      .then(feeds => dispatch(success(feeds)))
      .catch(err => dispatch(failure(err)));
  }
}
