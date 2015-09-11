import React from 'react'
import { Provider } from 'react-redux'
import { compose, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducers'
import { devTools } from 'redux-devtools'
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react'


import App from './containers/App'

const finalCreateStore = compose(
  applyMiddleware(thunk),
  devTools()
)(createStore)

const store = finalCreateStore(reducer)

React.render(
  <div>
    <Provider store={store}>
      {() => <App />}
    </Provider>
    <DebugPanel top right bottom>
      <DevTools store={store} monitor={LogMonitor} />
    </DebugPanel>
  </div>,
  document.getElementById('root')
)
