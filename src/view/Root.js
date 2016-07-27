import React, { Component } from 'react'
import { Router, Route, browserHistory } from 'react-router'
import Top from './Top'

export default class Root extends Component {
    render() {
      return (
        <Router history={browserHistory}>
          <Route path="/" component={Top} />
        </Router>
      );
    }
}
