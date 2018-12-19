import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App.jsx'
import * as serviceWorker from './serviceWorker'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

const store = createStore(
	() => {},
	window.__REACT_DEVTOOLS_EXTENSION__ && window.__REACT_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
)

serviceWorker.unregister();
