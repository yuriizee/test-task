import Vue from 'vue'
import Router from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('./components/Calendar')
  },
]

Vue.use(Router)

export default new Router({
  routes,
  mode: 'history',
  base: process.env.BASE_URL,
})