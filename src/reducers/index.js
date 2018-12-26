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
	}
}, {
	allStopsAllowed: true,
	noStopsAllowed: false,
	oneStopAllowed: false,
	twoStopsAllowed: false,
	threeStopsAllowed: false
})

export default combineReducers({
	stopsChoiceState
})