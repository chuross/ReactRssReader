import React, { Component } from 'react'
import { Router, Route, browserHistory } from 'react-router'
import Top from 'view/route/Top'

export default class Root extends Component {
    render() {
      return (
        <Router history={browserHistory}>
          <Route path="/" component={Top} />
        </Router>
      );
    }
}