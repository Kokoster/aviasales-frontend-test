const host = 'http://localhost:8009'

export default {
	ticketsURL: () => [host, 'tickets'].join('/')
}