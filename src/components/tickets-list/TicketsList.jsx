import React from 'react'

import './__Ticket.css'

import Ticket from '../ticket/Ticket.jsx'

export default class TicketsList extends React.Component {
	render() {
		const { currentCurrency, tickets } = this.props

		return (
			<div className={'TicketsList ' + (this.props.className || '')}>
				{tickets.map(ticket => <Ticket className='TicketsList__Ticket'
					 key={ticket.id} ticket={ticket} currentCurrency={currentCurrency} />)}
			</div>
		)
	}
}	