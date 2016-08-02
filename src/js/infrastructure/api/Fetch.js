import fetch from 'isomorphic-fetch'

const convert = response => {
  switch (response.headers.get('content-type')) {
    case 'application/json':
      return response.json();
    default:
      return response.text();
  }
}

export default class Fetch {
  static get(url, params = {}, headers = {}) {
    const query = this.buildQuery(params);
    const target = query.length > 0 ? `${url}?${query}` : url;

    return fetch(target, {
      method: 'GET',
      headers: new Headers(headers)
    }).then(this.convert);
  }

  static buildQuery(params = {}) {
    return Object.keys(params).reduce((prev, current) => {
      return `${prev}&${current}=${encodeURIComponent(params[current])}`
    }, '').substr(1);
  }
}
