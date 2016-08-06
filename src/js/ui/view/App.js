import React from 'react'
import ReactDom from 'react-dom'
import { Router, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from 'ui/reducer/app'
import routes from 'ui/view/Routes'
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import injectTapEventPlugin from 'react-tap-event-plugin'

const store = createStore(reducer, applyMiddleware(thunk));

injectTapEventPlugin();

ReactDom.render(
  <Provider store={store}>
    <MuiThemeProvider muiTheme={getMuiTheme(baseTheme)}>
      <Router history={browserHistory} routes={routes} />
    </MuiThemeProvider>
  </Provider>
, document.getElementById('app'));
