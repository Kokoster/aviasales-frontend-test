import { combineReducers } from 'redux'
import { handleActions } from 'redux-actions'
import * as actions from '../actions'

const stopsChoiceState = handleActions({
	[actions.toggleNoStopsAllowed](state) {
		return {...state, noStopsAllowed: !state.noStopsAllowed}
	},
	[actions.toggleOneStopAllowed](state) {
		return {...state, oneStopAllowed: !state.oneStopAllowed}
	},
	[actions.toggleTwoStopsAllowed](state) {
		return {...state, twoStopsAllowed: !state.twoStopsAllowed}
	},
	[actions.toggleThreeStopsAllowed](state) {
		return {...state, threeStopsAllowed: !state.threeStopsAllowed}
	}
}, {
	noStopsAllowed: false,
	oneStopAllowed: false,
	twoStopsAllowed: false,
	threeStopsAllowed: false
})

export default combineReducers({
	stopsChoiceState
})