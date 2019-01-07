import axios from 'axios'
import { createAction } from 'redux-actions'

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
		const ticketsURL = new URL('/tickets', 'http://localhost:8009')
		const response = await axios.get(ticketsURL)

		dispatch(fetchTicketsSuccess(response.data))
	} catch {
		dispatch(fetchTicketsFailure())
	}
}