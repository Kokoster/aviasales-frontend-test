import React from 'react'

import './TicketsList.css'

import Ticket from './Ticket.jsx'

export default class TicketsList extends React.Component {
	render() {
		const { currentCurrency, tickets } = this.props

		return (
			<div className='tickets-list'>
				{tickets.map(ticket => <Ticket key={ticket.id} ticket={ticket} currentCurrency={currentCurrency} />)}
			</div>
		)
	}
}	