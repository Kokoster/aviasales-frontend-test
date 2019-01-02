import { connect } from 'react-redux'
import Settings from '../components/Settings.jsx'
import * as actionsCreators from '../actions'

const mapStateToProps = ({ stopsChoiceState }) => {
	const props = {
		...stopsChoiceState
	}

	return props
}

export default connect(mapStateToProps, actionsCreators)(Settings)