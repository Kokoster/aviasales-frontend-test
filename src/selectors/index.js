import { createSelector } from 'reselect'

const getTicketsAndFilters = state => {
	return {
		tickets: state.tickets,
		stopsChoices: state.stopsChoiceState
	}
}

export const ticketsSelector = createSelector(
	getTicketsAndFilters,
	({ tickets, stopsChoices }) => tickets
		.filter(ticket => stopsChoices.allStopsAllowed || stopsChoices.stopsAllowed[ticket.stops]) 
)