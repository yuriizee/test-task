import request from '../system/request'
import router from './../router'

export default {
    namespaced: true,

    state: {
        accessToken: null,
        loginErrors: {},
        user: {},
        events: [
            {
                title: 'event1',
                start: '2019-07-01',
                data: {
                    media: {}
                }
            },
            {
                title: 'event2',
                start: '2019-07-05',
                end: '2019-07-07',
                className: ['f', 'ss'],
                data: {
                    inform: 1,
                    media: {
                        image: 'https://picsum.photos/250/250/?image=54',
                        audio: 'https://shershen08.github.io/vue-plugins-demo-static/dist/sample.mp3'
                    }
                }
            },
            {
                title: 'event3',
                start: '2019-07-09T12:30:00',
                allDay: false,
                data: {
                    media: {}
                }
            },
        ]
    },

    getters: {
        isAuthenticated: (state) => {
            return !_.isNull(state.accessToken)
        },
    },

    mutations: {
        setAccessToken: (state, value) => {
            localStorage.setItem('accessToken', value)
            state.accessToken = value
        },
    },

    actions: {
        login({commit, state}, credentials) {
            return request.post('login', credentials)
                .then((response) => {
                    const {
                        token: accessToken,
                        errors: errors,
                        name: name,
                        message: message,
                    } = response.data

                    state.loginErrors = Object(errors)
                    state.user.name = _.isUndefined(name) ? null : name;

                    if (!_.isUndefined(accessToken)) {
                        commit('setAccessToken', accessToken)
                        router.push({name: 'calendar'})
                    }
                })
                .catch((error) => Promise.reject(error.response))
        },
    }
};
