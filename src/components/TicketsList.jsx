import React from 'react'

import Ticket from '../containers/Ticket.js'

import {tickets} from '../resources/tickets.json'

export default class TicketsList extends React.Component {
	render() {
		const { stopsChoiceState } = this.props

		return <div>
			{tickets.filter(ticket => {
				return stopsChoiceState.allStopsAllowed ||
				(ticket.stops === 0 && stopsChoiceState.noStopsAllowed) ||
				(ticket.stops === 1 && stopsChoiceState.oneStopAllowed) ||
				(ticket.stops === 2 && stopsChoiceState.twoStopsAllowed) ||
				(ticket.stops === 3 && stopsChoiceState.threeStopsAllowed) 
			})
			.map(ticket => <Ticket
				ticket={ticket} />)}
		</div>
	}
}	