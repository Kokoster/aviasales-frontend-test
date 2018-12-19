import React from 'react'

import Ticket from './Ticket.jsx'

import {tickets} from '../resources/tickets.json'

export default class TicketsList extends React.Component {
	render() {
		console.log(tickets)

		return <div>
			{tickets.map(ticket => <Ticket
				ticket={ticket} />)}
		</div>
	}
}	