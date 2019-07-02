export default {
  namespaced: true,

  state: {
    accessToken: null,
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
    addEvent(state, data) {
      state.events.push(data)
    },
    setAccessToken: (state, value) => {
      localStorage.setItem('accessToken', value)
      state.accessToken = value
    },
  },

  actions: {
    login(context, credentials) {
      return http.post('/login', credentials)
        .then((response) => {
          const {access_token: accessToken} = response.data
          context.commit('setAccessToken', accessToken)
        })
        .catch((error) => Promise.reject(error.response))
    },
  }
};
