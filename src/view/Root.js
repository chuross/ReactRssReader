import { Component } from 'react'
import { Router, Route } from 'react-router'

export default class Root extends Component {
    render() {
      return (
        <Router>
          <Route path="/" component={Top} />
        </Router>
      );
    }
}
