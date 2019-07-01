export default {
  namespaced: true,

  state: {
    events: [
      {
        title  : 'event1',
        start  : '2019-07-01',
      },
      {
        title  : 'event2',
        start  : '2019-07-05',
        end    : '2019-07-07',
      },
      {
        title  : 'event3',
        start  : '2019-07-09T12:30:00',
        allDay : false,
      },
    ]
  },

  getters: {},

  mutations: {
    addEvent(state, data) {
      console.log(state.events);
      state.events.push(data);
    },
  },

  actions: {}
};
