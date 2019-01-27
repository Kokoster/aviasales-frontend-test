import React from 'react'
import cn from 'classnames'

import './Ticket.css'
import './__BuySection.css'
import './__BuyButton.css'
import './__DetailsSection.css'
import './__StopsLabel.css'
import './__TimePlaceLabel.css'

import suLogo from '../../resources/carriers/SU.png'
import s7Logo from '../../resources/carriers/S7.png'
import baLogo from '../../resources/carriers/BA.png'
import tkLogo from '../../resources/carriers/TK.png'

import stopsImage from '../../resources/stops.png'

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

		return <div className={'Ticket ' + (this.props.className || '')}>
			<div className='row'>
				<div className='Ticket__BuySection h-100 col-4'>
					<img className='Ticket__Logo w-100' 
						src={ carriersLogos[ticket.carrier] } 
						alt='Company label' />
					<button className='btn Ticket__BuyButton w-100'>Купить <br /> за {this.convertPrice(ticket.price)}</button>
				</div>
				<div className='Ticket__DetailsSection col'>
					<div className='row'>
						<div className='col-4'>
							<div className='Ticket__TimePlaceLabel Ticket__TimePlaceLabel_time'>{ticket.departure_time}</div>
							<div className='Ticket__TimePlaceLabel Ticket__TimePlaceLabel_place'>{ticket.origin}, {ticket.origin_name}</div>
							<div className='Ticket__TimePlaceLabel Ticket__TimePlaceLabel_date'>{ticket.departure_date}, Пт</div>
						</div>
						<div className='col-4'>
							<div className='Ticket__StopsLabel text-uppercase'>{stopsLabels[ticket.stops]}</div>
							<img className='mx-auto' src={ stopsImage } alt='Stops' />
						</div>
						<div className='col-4'>
							<div className='Ticket__TimePlaceLabel Ticket__TimePlaceLabel_time'>{ticket.arrival_time}</div>
							<div className='Ticket__TimePlaceLabel Ticket__TimePlaceLabel_place'>{ticket.destination_name}, {ticket.destionation}</div>
							<div className='Ticket__TimePlaceLabel Ticket__TimePlaceLabel_date'>{ticket.arrival_date}, Пт</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	}
}