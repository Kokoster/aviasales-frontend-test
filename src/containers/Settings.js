import { connect } from 'react-redux'
import Settings from '../components/settings/Settings.jsx'
import * as actionsCreators from '../actions'

const mapStateToProps = ({ stopsChoiceState, currencyState }) => {
	const props = {
		...stopsChoiceState,
		currentCurrency: currencyState
	}

	return props
}

export default connect(mapStateToProps, actionsCreators)(Settings)