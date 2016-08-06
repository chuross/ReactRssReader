import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as initActions from 'ui/action/top/initialize'
import EntryCard from 'ui/view/component/EntryCard'

export default class Main extends Component {
  componentDidMount() {
    this.props.initActions.execute();
  }

  render() {
    return (
      <EntryCard entries={this.props.entries} />
    );
  }
}

export default connect(state => {
  return {
    isInitialized: state.initialize.isInitialized || false,
    entries: state.initialize.entries || []
  };
}, dispatch => {
  return {
    initActions: bindActionCreators(initActions, dispatch)
  };
})(Main);
