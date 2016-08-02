import { createAction } from 'redux-actions'
import FeedlyApi from 'infrastructure/feedly/FeedlyApi'

export const request = createAction('INITIALIZE_REQUEST');

export const success = createAction('INITIALIZE_SUCCESS', (entries = []) => {
  return {
    entries: entries
  };
});

export const failure = createAction('INITIALIZE_FAILURE');

export function execute() {
  return (dispatch, getState) => {
    dispatch(request());
    return FeedlyApi.getEntries('feed/http://overwatch.blog.jp/index.rdf')
      .then(entries => dispatch(success(entries)))
      .catch(err => dispatch(failure(err)));
  }
}
