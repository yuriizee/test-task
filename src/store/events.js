import request from '../system/request'

export default {
    namespaced: true,

    state: {
        event: {},
        events: []
    },

    getters: {
        events: (state) => state.events,
        event: (state) => state.event,
    },

    mutations: {
        setEvents: (state, value) => {
            state.events = value
        },
        addEvent: (state, value) => {
            state.events.push(value)
        }
    },

    actions: {
        getMonthEvents({state}, params) {
            return request.get('event', {params: params})
                .then((response) => {
                    state.events = response.data.data
                })
        },
        getEvent({state}, id) {
            return request.get('event/' + id)
                .then((response) => {
                    state.event = response.data
                })
        },
        create({state}, params) {
            return request.post('event', params, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
        },
        destroy({state}, id) {
            return request.delete('event/' + id)
        },
    }
};
