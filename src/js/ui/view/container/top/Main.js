import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import CircularProgress from 'material-ui/CircularProgress'
import * as initActions from 'ui/action/top/initialize'
import FeedCard from 'ui/view/component/FeedCard'

export default class Main extends Component {
  componentDidMount() {
    this.props.execute();
  }

  render() {
    let { isInitialized, feeds } = this.props;
    let component = isInitialized ? feeds.map(feed => <FeedCard feed={feed} />) : <CircularProgress />;
    return (
      <div>{component}</div>
    );
  }
}

export default connect(state => {
  return {
    isInitialized: state.initialize.isInitialized,
    feeds: state.initialize.feeds
  };
}, dispatch => bindActionCreators(initActions, dispatch))(Main);
