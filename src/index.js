import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import 'bootstrap/dist/css/bootstrap.min.css'

import './index.css'
import App from './components/App.jsx'
import reducers from './reducers'
import * as serviceWorker from './serviceWorker'
import { fetchTickets } from './actions'

/* eslint-disable no-underscore-dangle */
const store = createStore(
  reducers,
  compose(
  	applyMiddleware(thunk),
  	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)
/* eslint-enable */

store.dispatch(fetchTickets())

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
)

serviceWorker.unregister();
