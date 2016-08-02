import fetch from 'isomorphic-fetch'

export default class Fetch {
  static get(url, params = {}, headers = {}) {
    const query = this.buildQuery(params);
    const target = query.length > 0 ? `${url}?${query}` : url;

    return fetch(target, {
      method: 'GET',
      headers: new Headers(headers)
    }).then(convert());
  }

  static convert(response) {
    switch (response.headers.get('content-type')) {
      case 'application/json':
        return (response) => response.json();
      default:
        return (response) => response.text();
    }
  }

  static buildQuery(params = {}) {
    return Object.keys(params).reduce((prev, current) => {
      return `${prev}&${current}=${encodeURIComponent(params[current])}`
    }, '').substr(1);
  }
}
