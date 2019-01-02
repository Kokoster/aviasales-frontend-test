import React from 'react'

import Ticket from '../containers/Ticket.js'

import {tickets} from '../resources/tickets.json'

export default class TicketsList extends React.Component {
	render() {
		const { allStopsAllowed, stopsAllowed } = this.props

		return <div>
			{tickets.filter(ticket => {
				return allStopsAllowed || stopsAllowed[ticket.stops]
			})
			.map(ticket => <Ticket
				ticket={ticket} />)}
		</div>
	}
}	