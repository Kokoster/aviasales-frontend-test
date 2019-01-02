import { connect } from 'react-redux'
import Ticket from '../components/Ticket.jsx'

const mapStateToProps = ({ stopsChoiceState, currencyState }) => {
	const props = {
		stopsChoiceState,
		currentCurrency: currencyState
	}

	return props
}

export default connect(mapStateToProps)(Ticket)