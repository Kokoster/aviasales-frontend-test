import React from 'react'
import temp from '../resources/temp.jpg'

export default class Ticket extends React.Component {
	render() {
		const {ticket} = this.props

		return <div className='row m-3'>
			<div className='card'>
				<div className='card-body'>
					<img className='rounded mx-auto d-block m-3' src={temp} alt='Company label' style={{height:'50px', width:'40px'}}></img>
					<button className='btn btn-primary'>Купить за {ticket.price}Р</button>
				</div>
			</div>
			<div className='card col-7'>
				<div className='card-body'>
					<div className='row'>
						<div className='col'>{ticket.departure_time}</div>
						<div className='col'>{ticket.arrival_time}</div>
					</div>
					<div className='row'>
						<div className='col'>{ticket.origin}, {ticket.origin_name}</div>
						<div className='col'>{ticket.destination_name}, {ticket.destination}</div>
					</div>
					<div className='row'>
						<div className='col'>{ticket.departure_date}, Пт</div>
						<div className='col'>{ticket.arrival_date}, Пт</div>
					</div>
				</div>
			</div>
		</div>
	}
}