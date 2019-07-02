import Vue from 'vue'
import router from './router'
import store from './store'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import uk from 'vee-validate/dist/locale/uk'
import VeeValidate, {Validator} from 'vee-validate'
import App from './App.vue'
import FullCalendar from 'vue-full-calendar'
import axios from "axios";

store.commit('global/setAccessToken', localStorage.getItem('accessToken'))

window.http = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  validateStatus: function (status) {
    if (status === 401) {
      console.log(401)
      localStorage.removeItem('accessToken')
      location = '/login'
    }
    return status >= 200 && status < 500;
  },
});

const _ = require('lodash')

Vue.use(FullCalendar, BootstrapVue, VeeValidate)

Validator.localize('uk', uk);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
