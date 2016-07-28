import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import * as initActions from 'ui/action/top/initialize'

class Main extends Component {
  componentDidMount() {
    this.props.actions.initialize.request();
  }

  render() {
    return (
      <div>main {new Boolean(this.props.isInitialized).toString()}</div>
    );
  }
}

Main.proptypes = {
  isInitialized: PropTypes.bool.isRequired,
  entries: PropTypes.array.isRequired
}

Main.defaultProps = {
  inInitialized: false,
  entries: []
}

export default connect(state => {
  return {
    isInitialized: state.isInitialized
  }
}, dispatch => {
  return {
    actions: {
      initialize: initActions
    }
  }
})(Main);
