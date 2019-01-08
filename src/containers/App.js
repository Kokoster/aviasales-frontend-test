import { connect } from 'react-redux'
import App from '../components/App.jsx'
import * as actionsCreators from '../actions'

const mapStateToProps = ({ fetchingTicketsState }) => {
	const props = {
		fetchingTicketsState: fetchingTicketsState
	}

	return props
}

export default connect(mapStateToProps, actionsCreators)(App)