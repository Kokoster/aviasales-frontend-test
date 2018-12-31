import { createAction } from 'redux-actions'

export const toggleAllStopsAllowed = createAction('ALL_STOPS_ALLOWED')
export const toggleNoStopsAllowed = createAction('NO_STOP_ALLOWED_TOGGLE')
export const toggleOneStopAllowed = createAction('ONE_STOP_ALLOWED_TOGGLE')
export const toggleTwoStopsAllowed = createAction('TWO_STOPS_ALLOWED_TOGGLE')
export const toggleThreeStopsAllowed = createAction('THREE_STOPS_ALLOWED_TOGGLE')

export const switchToCurrency = createAction('SWITCH_CURRENCY')