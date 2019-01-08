import { connect } from 'react-redux'
import TicketsList from '../components/TicketsList.jsx'

import { ticketsSelector } from '../selectors'

const mapStateToProps = ( state ) => {
	const props = {
		fetchingTicketsState: state.fetchingTicketsState,
		tickets: ticketsSelector(state),
		currentCurrency: state.currencyState,
	}

	return props
}

export default connect(mapStateToProps)(TicketsList)