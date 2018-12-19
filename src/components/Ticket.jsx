import React from 'react'

export default class Ticket extends React.Component {
	render() {
		const {ticket} = this.props

		return <div className='card'>
			<div className='card-body'>
				<div className='row'>
					<div className='col'>{ticket.departure_time}</div>
					<div className='col'>{ticket.arrival_time}</div>
				</div>
				<div className='row'>
					<div className='col'>{ticket.origin}, {ticket.origin_name}</div>
					<div className='col'>{ticket.destination}, {ticket.destination_name}</div>
				</div>
				<div className='row'>
					<div className='col'>{ticket.departure_date}, Пт</div>
					<div className='col'>{ticket.arrival_date}, Пт</div>
				</div>
			</div>
		</div>
	}
}