import React from 'react'
import './Settings.css'

export default class Settings extends React.Component {
	toggleAllStops = () => {
		this.props.toggleAllStopsAllowed()
	}

	toggleNoStops = () => {
		this.props.toggleNoStopsAllowed()
	}

	switchNoStops = () => {
		this.props.switchNoStops()
	}

	toggleOneStop = () => {
		this.props.toggleOneStopAllowed()
	}

	switchOneStop = () => {
		this.props.switchOneStop()
	}

	toggleTwoStops = () => {
		this.props.toggleTwoStopsAllowed()
	}

	switchTwoStops = () => {
		this.props.switchTwoStops()
	}

	toggleThreeStops = () => {
		this.props.toggleThreeStopsAllowed()
	}

	switchThreeStops = () => {
		this.props.switchThreeStops()
	}

	switchToRouble = () => {
		this.props.switchToCurrency('RUB')
	}

	switchToDollar = () => {
		this.props.switchToCurrency('USD')
	}

	swithToEuro = () => {
		this.props.switchToCurrency('EUR')
	}

	render() {
		const { stopsChoiceState } = this.props

		return <div className='card m-3 h-100'>
			<div className='card-body'>
				<h5 className='card-title text-left'>Валюта</h5>
				<div className='btn-group' role='group' aria-label='Choose currency'>
					<button type='button' className='btn btn-secondary' onClick={this.switchToRouble}>RUB</button>
					<button type='button' className='btn btn-secondary' onClick={this.switchToDollar}>USD</button>
					<button type='button' className='btn btn-secondary' onClick={this.swithToEuro}>EUR</button>
				</div>
				<div className='m-4' />
				<h5 className='card-title text-left'>Количество пересадок</h5>
				<div className='list-group'>
					<div className='checkbox text-left list-group-item list-group-item-action'>
						<label><input type='checkbox' checked={stopsChoiceState.allStopsAllowed} onChange={this.toggleAllStops} />Все</label>
					</div>
					<div className='checkbox text-left list-group-item list-group-item-action'>
						<label><input type='checkbox' checked={stopsChoiceState.noStopsAllowed} onChange={this.toggleNoStops} />Без пересадок</label>
						<button type='button' className='btn btn-link onlyFilter' onClick={this.switchNoStops}>ТОЛЬКО</button>
					</div>
					<div className='checkbox text-left list-group-item list-group-item-action'>
						<label><input type='checkbox' checked={stopsChoiceState.oneStopAllowed} onChange={this.toggleOneStop} />1 пересадка</label>
						<button type='button' className='btn btn-link onlyFilter' onClick={this.switchOneStop}>ТОЛЬКО</button>
					</div>
					<div className='checkbox text-left list-group-item list-group-item-action'>
						<label><input type='checkbox' checked={stopsChoiceState.twoStopsAllowed} onChange={this.toggleTwoStops} />2 пересадки</label>
						<button type='button' className='btn btn-link onlyFilter' onClick={this.switchTwoStops}>ТОЛЬКО</button>
					</div>
					<div className='checkbox text-left list-group-item list-group-item-action'>
						<label><input type='checkbox' checked={stopsChoiceState.threeStopsAllowed} onChange={this.toggleThreeStops} />3 пересадки</label>
						<button type='button' className='btn btn-link onlyFilter' onClick={this.switchThreeStops}>ТОЛЬКО</button>
					</div>
				</div>
			</div>
		</div>
	}
}