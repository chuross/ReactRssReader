import Fetch from 'infrastructure/api/Fetch'

const baseUrl = 'https://bosatsu.arukascloud.io/feedly';

const isSuccess = result => {
  if (!result.ok) throw new Error('status not ok');
  return result;
}

export default class FeedlyApi {
  static getEntries(blogId, count = 10, locale = 'ja') {
    return Fetch.get(`${baseUrl}/mixes/contents`, {
        streamId: blogId,
        count: count,
        locale: locale
      })
      .then(this.isSuccess)
      .then(result => result.json())
      .then(data => data.items);
  }
}
