import React from 'react'
import cn from 'classnames'
import './Settings.css'

const stopsLabels = ['Без пересадок', '1 пересадка', '2 пересадки', '3 пересадки']
const currencyOptions = ['RUB', 'USD', 'EUR']

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

	renderCurrencySwitcher() {
		return <div className='btn-group' role='group' aria-label='Choose currency'>
			{currencyOptions.map(currency => {
				const buttonClasses = cn({
					btn: true,
					'btn-default': true,
					'btn-currency': true,
					active: currency === this.props.currentCurrency
				})

				return <button type='button' key={currency} 
					className={buttonClasses} onClick={this.changeCurrency(currency)}>{currency}</button>
			})}
		</div>
	}

	renderStopsFilter() {
		const { allStopsAllowed, stopsAllowed } = this.props

		return <div className='list-group'>
			<div className='checkbox text-left list-group-item list-group-item-action'>
				<label className='m-0'>
					<input type='checkbox' className='default-checkbox' checked={allStopsAllowed} onChange={this.switchAllStops} />
					<span className='custom-checkbox' />
					Все
				</label>
			</div>

			{stopsLabels.map((label, index) => 
				<div key={index} className='checkbox text-left list-group-item list-group-item-action'>
					<label className='m-0'>
						<input className='default-checkbox' type='checkbox' checked={stopsAllowed[index]} onChange={this.toggleStops(index)} />
						<span className='custom-checkbox' />		
						{label}
					</label>
					<button type='button' className='btn btn-link only-filter' onClick={this.switchStops(index)}>ТОЛЬКО</button>
				</div>
			)}
		</div>
	}

	render() {
		return <div className='m-3 h-100'>
			<div className='settings'>
				<h5 className='text-left'>ВАЛЮТА</h5>
				{this.renderCurrencySwitcher()}
				<div className='m-4' />
				<h5 className='text-left'>КОЛИЧЕСТВО ПЕРЕСАДОК</h5>
				{this.renderStopsFilter()}
			</div>
		</div>
	}
}