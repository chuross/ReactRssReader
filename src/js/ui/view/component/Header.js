import React, { Component } from 'react'
import HeaderMenu from 'ui/view/component/HeaderMenu'

export default class Header extends Component {
  render() {
    return (
      <header>
        <h1>Reactで作ったRSSリーダー</h1>
        <HeaderMenu />
      </header>
    );
  }
}
