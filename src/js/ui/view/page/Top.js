import React, { Component } from 'react'
import Header from 'ui/view/component/header'
import Main from 'ui/view/container/top/Main'

export default class Top extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
      </div>
    );
  }
}
