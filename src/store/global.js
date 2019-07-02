export default {
  namespaced: true,

  state: {
    events: [
      {
        title  : 'event1',
        start  : '2019-07-01',
        data: {
          media: {}
        }
      },
      {
        title  : 'event2',
        start  : '2019-07-05',
        end    : '2019-07-07',
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
        title  : 'event3',
        start  : '2019-07-09T12:30:00',
        allDay : false,
        data: {
          media: {}
        }
      },
    ]
  },

  getters: {},

  mutations: {
    addEvent(state, data) {
      state.events.push(data);
    },
  },

  actions: {}
};
