import Fetch from 'infrastructure/api/Fetch'

const baseUrl = 'http://cloud.feedly.com/v3';

export default class FeedlyApi {
  static getEntries(blogId, count = 10, locale = 'ja') {
    return Fetch.get(`${baseUrl}/mixes/contents`, {
      streamId: blogId,
      count: count,
      locale: locale
    }).then(result => result.items)
  }
}
