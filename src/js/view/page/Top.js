import React, { Component } from 'react'
import Header from 'view/component/header'
import Main from 'view/component/top/Main'

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
