import React from 'react'

import Ticket from './Ticket.jsx'

export default class TicketsList extends React.Component {
	render() {
		const { currentCurrency, tickets } = this.props

		return (
			<div>  
				{tickets.map(ticket => <Ticket key={ticket.id} ticket={ticket} currentCurrency={currentCurrency} />)}
			</div>
		)
	}
}	