import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as initActions from 'ui/action/top/initialize'

class Main extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.initActions.request();
  }

  render() {
    return (
      <div>main</div>
    );
  }
}

Main.proptypes = {
  isInitialized: PropTypes.bool.isRequired,
  entries: PropTypes.array.isRequired
}

export default connect(state => {
  return {
    isInitialized: state.isInitialized,
    entries: state.entries
  };
}, dispatch => {
  return {
    initActions: bindActionCreators(initActions, dispatch)
  };
})(Main);
