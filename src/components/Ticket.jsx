import React from 'react'
import './Ticket.css'

import suLogo from '../resources/carriers/SU.png'
import s7Logo from '../resources/carriers/S7.png'
import baLogo from '../resources/carriers/BA.png'
import tkLogo from '../resources/carriers/TK.png'

import stopsImage from '../resources/stops.png'

const currencyConstants = {
	'RUB': [1.0, '\u20BD'],
	'USD': [0.014, '\u0024'],
	'EUR': [0.013, '\u20AC']
}

const carriersLogos = {
	'SU': suLogo,
	'S7': s7Logo,
	'BA': baLogo,
	'TK': tkLogo
}

const stopsLabels = ['', '1 Пересадка', '2 Пересадки', '3 Пересадки']

export default class Ticket extends React.Component {
	convertPrice(price) {
		const currency = currencyConstants[this.props.currentCurrency]
		return (price * currency[0]).toFixed() + currency[1]
	}

	render() {
		const { ticket } = this.props

		return <div className='row m-3'>
			<div className='card'>
				<div className='card-body price-container'>
					<img className='mx-auto d-block m-3 w-10 h-25' 
						src={ carriersLogos[ticket.carrier] } 
						alt='Company label' />
					<button className='btn btn-primary buy-btn w-100'>Купить <br /> за {this.convertPrice(ticket.price)}</button>
				</div>
			</div>
			<div className='card col'>
				<div className='card-body flight-details'>
					<div className='row'>
						<div className='col first-layer text-left'>{ticket.departure_time}</div>
						<div className='col'>
							<div className='stops-label text-uppercase'>{stopsLabels[ticket.stops]}</div>
							<img className='mx-auto d-block'
								src={ stopsImage }
								alt='Stops' />
						</div>
						<div className='col first-layer text-right'>{ticket.arrival_time}</div>
					</div>
					<div className='row second-layer'>
						<div className='col text-left'>{ticket.origin}, {ticket.origin_name}</div>
						<div className='col text-right'>{ticket.destination_name}, {ticket.destination}</div>
					</div>
					<div className='row third-layer'>
						<div className='col text-left'>{ticket.departure_date}, Пт</div>
						<div className='col text-right'>{ticket.arrival_date}, Пт</div>
					</div>
				</div>
			</div>
		</div>
	}
}