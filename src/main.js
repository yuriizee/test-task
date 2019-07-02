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

const _ = require('lodash')

Vue.use(FullCalendar)
Vue.use(BootstrapVue)
Vue.use(VeeValidate)

Validator.localize('uk', uk);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
