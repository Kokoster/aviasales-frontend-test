import { combineReducers } from 'redux'
import { handleActions } from 'redux-actions'
import * as actions from '../actions'

const stopsChoiceState = handleActions({
	[actions.toggleAllStopsAllowed](state) {
		return {
			allStopsAllowed: !state.allStopsAllowed,
			noStopsAllowed: false,
			oneStopAllowed: false,
			twoStopsAllowed: false,
			threeStopsAllowed: false
		}
	},
	[actions.toggleNoStopsAllowed](state) {
		return {...state, noStopsAllowed: !state.noStopsAllowed, allStopsAllowed: false}
	},
	[actions.toggleOneStopAllowed](state) {
		return {...state, oneStopAllowed: !state.oneStopAllowed, allStopsAllowed: false}
	},
	[actions.toggleTwoStopsAllowed](state) {
		return {...state, twoStopsAllowed: !state.twoStopsAllowed, allStopsAllowed: false}
	},
	[actions.toggleThreeStopsAllowed](state) {
		return {...state, threeStopsAllowed: !state.threeStopsAllowed, allStopsAllowed: false}
	},
	[actions.switchNoStops]() {
		return {
			allStopsAllowed: false,
			noStopsAllowed: true,
			oneStopAllowed: false,
			twoStopsAllowed: false,
			threeStopsAllowed: false
		}
	},
	[actions.switchOneStop]() {
		return {
			allStopsAllowed: false,
			noStopsAllowed: false,
			oneStopAllowed: true,
			twoStopsAllowed: false,
			threeStopsAllowed: false
		}
	},
	[actions.switchTwoStops]() {
		return {
			allStopsAllowed: false,
			noStopsAllowed: false,
			oneStopAllowed: false,
			twoStopsAllowed: true,
			threeStopsAllowed: false
		}
	},
	[actions.switchThreeStops]() {
		return {
			allStopsAllowed: false,
			noStopsAllowed: false,
			oneStopAllowed: false,
			twoStopsAllowed: false,
			threeStopsAllowed: true
		}
	}
}, {
	allStopsAllowed: true,
	noStopsAllowed: false,
	oneStopAllowed: false,
	twoStopsAllowed: false,
	threeStopsAllowed: false
})

const currencyState = handleActions({
	[actions.switchToCurrency](state, {payload}) {
		return payload
	}
}, 'RUB')

export default combineReducers({
	stopsChoiceState,
	currencyState
})