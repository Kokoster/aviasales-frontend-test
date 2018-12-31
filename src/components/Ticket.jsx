import React from 'react'
import temp from '../resources/temp.jpg'

const currencyConstants = {
	'RUB': [1.0, '\u20BD'],
	'USD': [0.014, '\u0024'],
	'EUR': [0.013, '\u20AC']
}

export default class Ticket extends React.Component {
	convertPrice(price) {
		console.log(this.props)
		const currency = currencyConstants[this.props.current]
		return (price * currency[0]).toFixed() + currency[1]
	}

	render() {
		const {ticket} = this.props

		return <div className='row m-3'>
			<div className='card'>
				<div className='card-body'>
					<img className='rounded mx-auto d-block m-3' src='' alt='Company label' style={{height:'50px', width:'40px'}}></img>
					<button className='btn btn-primary'>Купить за {this.convertPrice(ticket.price)}</button>
				</div>
			</div>
			<div className='card col'>
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