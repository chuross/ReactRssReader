import React, { Component } from 'react'
import { Router, browserHistory } from 'react-router'
import routes from 'ui/view/Routes'

export default class Index extends Component {
    render() {
      return (<Router history={browserHistory} routes={routes} />);
    }
}
