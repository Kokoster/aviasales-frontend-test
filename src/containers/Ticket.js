import { connect } from 'react-redux'
import Ticket from '../components/Ticket.jsx'

const mapStateToProps = ({ stopsChoiceState, currencyState }) => {
	const props = {
		stopsChoiceState,
		current: currencyState
	}

	return props
}

export default connect(mapStateToProps)(Ticket)