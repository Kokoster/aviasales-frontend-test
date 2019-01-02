import { connect } from 'react-redux'
import TicketsList from '../components/TicketsList.jsx'

const mapStateToProps = ({ stopsChoiceState }) => {
	const props = {
		...stopsChoiceState,
	}

	return props
}

export default connect(mapStateToProps)(TicketsList)