import React from 'react'
import './Settings.css'

const stopsLabels = ['Без пересадок', '1 пересадка', '2 пересадки', '3 пересадки']

export default class Settings extends React.Component {
	switchAllStops = () => {
		this.props.switchAllStops()
	}

	toggleStops = (stopsCount) => () => {
		this.props.toggleStops({ stopsCount: stopsCount })
	}

	switchStops = (stopsCount) => () => {
		this.props.switchStops({ stopsCount: stopsCount })
	}

	changeCurrency = (currency) => () => {
		this.props.changeCurrency({ newCurrency: currency })
	}

	render() {
		const { allStopsAllowed, stopsAllowed } = this.props

		console.log(this.props)
		console.log(stopsAllowed[0])

		return <div className='card m-3 h-100'>
			<div className='card-body'>
				<h5 className='card-title text-left'>Валюта</h5>
				<div className='btn-group' role='group' aria-label='Choose currency'>
					<button type='button' className='btn btn-secondary' onClick={this.changeCurrency('RUB')}>RUB</button>
					<button type='button' className='btn btn-secondary' onClick={this.changeCurrency('USD')}>USD</button>
					<button type='button' className='btn btn-secondary' onClick={this.changeCurrency('EUR')}>EUR</button>
				</div>
				<div className='m-4' />
				<h5 className='card-title text-left'>Количество пересадок</h5>
				<div className='list-group'>
					<div className='checkbox text-left list-group-item list-group-item-action'>
						<label><input type='checkbox' checked={allStopsAllowed} onChange={this.switchAllStops} />Все</label>
					</div>

					{stopsLabels.map((label, index) => 
						<div key={index} className='checkbox text-left list-group-item list-group-item-action'>
							<label><input type='checkbox' checked={stopsAllowed[index]} onChange={this.toggleStops(index)} />{label}</label>
							<button type='button' className='btn btn-link only-filter' onClick={this.switchStops(index)}>ТОЛЬКО</button>
						</div>
					)}
				</div>
			</div>
		</div>
	}
}