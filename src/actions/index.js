import { createAction } from 'redux-actions'

export const toggleAllStopsAllowed = createAction('ALL_STOPS_ALLOWED_TOGGLE')
export const toggleNoStopsAllowed = createAction('NO_STOP_ALLOWED_TOGGLE')
export const toggleOneStopAllowed = createAction('ONE_STOP_ALLOWED_TOGGLE')
export const toggleTwoStopsAllowed = createAction('TWO_STOPS_ALLOWED_TOGGLE')
export const toggleThreeStopsAllowed = createAction('THREE_STOPS_ALLOWED_TOGGLE')

export const switchNoStops = createAction('SWITCH_NO_STOPS')
export const switchOneStop = createAction('SWITCH_ONE_STOP')
export const switchTwoStops = createAction('SWITCH_TWO_STOPS')
export const switchThreeStops = createAction('SWITCH_THREE_STOPS')

export const switchToCurrency = createAction('SWITCH_CURRENCY')