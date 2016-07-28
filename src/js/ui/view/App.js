import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from 'ui/reducer/app'
import Index from 'ui/view/Index'

const store = createStore(reducer);

ReactDom.render(
  <Provider store={store}>
    <Index />
  </Provider>
, document.getElementById('app'));
