import React from 'react'

export default class Settings extends React.Component {
	render() {
		return <div className='card m-3 h-100'>
			<div className='card-body'>
				<h5 className='card-title text-left'>Валюта</h5>
				<div className='btn-group' role='group' aria-label='Choose currency'>
					<button type='button' className='btn btn-secondary'>RUB</button>
					<button type='button' className='btn btn-secondary'>USD</button>
					<button type='button' className='btn btn-secondary'>EUR</button>
				</div>
				<div className='m-4' />
				<h5 className='card-title text-left'>Количество пересадок</h5>
				<label for='ch1'>Все</label>
				<input id='ch1' type='checkbox' />
			</div>
		</div>
	}
}