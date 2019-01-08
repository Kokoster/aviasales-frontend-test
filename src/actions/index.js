import axios from 'axios'
import { createAction } from 'redux-actions'

import routes from '../routes'

export const switchAllStops = createAction('SWITCH_ALL_STOPS')
export const toggleStops = createAction('TOGGLE_STOPS')
export const switchStops = createAction('SWITCH_STOPS')
export const changeCurrency = createAction('CHANGE_CURRENCY')

export const fetchTicketsRequest = createAction('FETCH_TICKETS_REQUEST')
export const fetchTicketsSuccess = createAction('FETCH_TICKETS_SUCCESS')
export const fetchTicketsFailure = createAction('FETCH_TICKETS_FAILURE')

export const fetchTickets = () => async (dispatch) => {
	dispatch(fetchTicketsRequest())

	try {
		const response = await axios.get(routes.ticketsURL())

		dispatch(fetchTicketsSuccess(response.data))
	} catch {
		dispatch(fetchTicketsFailure())
	}
}