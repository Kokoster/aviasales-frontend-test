import { combineReducers } from 'redux'
import { handleActions } from 'redux-actions'
import * as actions from '../actions'
import update from 'immutability-helper'
import { uniqueId } from 'lodash'

const stopsChoiceState = handleActions({
	[actions.switchAllStops](state) {
		return {
			allStopsAllowed: true,
			stopsAllowed: [false, false, false, false]
		}
	},
	[actions.toggleStops](state, {payload: {stopsCount}}) {
		const previousState = state.stopsAllowed[stopsCount]
		return {...state, allStopsAllowed: false, 
			stopsAllowed: update(state.stopsAllowed, {[stopsCount]: { $set: !previousState }})}
	},
	[actions.switchStops](state, {payload: {stopsCount}}) {
		const stopsAllowed = [false, false, false, false]
		stopsAllowed[stopsCount] = true
		
		return {...state, allStopsAllowed: false, stopsAllowed: stopsAllowed}
	}
}, {
	allStopsAllowed: true,
	stopsAllowed: [false, false, false, false]
})

const currencyState = handleActions({
	[actions.changeCurrency](state, {payload: { newCurrency }}) {
		return newCurrency
	}
}, 'RUB')

const fetchingTicketsState = handleActions({
	[actions.fetchTicketsRequest]() {
		return 'requested'
	},
	[actions.fetchTicketsSuccess]() {
		return 'succeeded'
	},
	[actions.fetchTicketsFailure]() {
		return 'failed'
	}
}, 'none')

const tickets = handleActions({
	[actions.fetchTicketsSuccess](state, { payload: { tickets } } ) {
		return tickets.map(ticket => { 
			return {...ticket, id: uniqueId()}
		})
	}
}, [])

export default combineReducers({
	stopsChoiceState,
	currencyState,
	fetchingTicketsState,
	tickets
})