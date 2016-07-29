import React from 'react'
import ReactDom from 'react-dom'
import { Router, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from 'ui/reducer/app'
import routes from 'ui/view/Routes'

const store = createStore(reducer, applyMiddleware(thunk));

ReactDom.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
, document.getElementById('app'));
