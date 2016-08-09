import { createAction } from 'redux-actions'
import FeedlyApi from 'infrastructure/feedly/FeedlyApi'

export const request = createAction('INITIALIZE_REQUEST');

export const success = createAction('INITIALIZE_SUCCESS', (feeds = []) => {
  return { feeds: feeds };
});

export const failure = createAction('INITIALIZE_FAILURE');

export function execute(query) {
  return (dispatch, getState) => {
    dispatch(request());
    return FeedlyApi.getFeeds(query)
      .then(feeds => {
        return Promise.all([
          Promise.resolve(feeds),
          ...feeds.map(feed => FeedlyApi.getEntries(feed.feedId))
        ]);
      })
      .then(result => {
        const feeds = result[0];
        const entryList = result.slice(1);
        dispatch(success(entryList.map((entries, index) => {
          feeds[index].entries = entries;
          return feeds[index];
        })));
      })
      .catch(err => {
        dispatch(failure(err));
      });
  }
}
