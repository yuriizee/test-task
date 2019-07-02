import Vue from 'vue'
import Router from 'vue-router'
import store from './store'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('./components/Calendar')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('./components/auth/Login')
  },
  {
    path: '/registration',
    name: 'registration',
    component: () => import('./components/auth/Login')
  },
]

Vue.use(Router)

const router = new Router({
  routes,
  mode: 'history',
  base: process.env.BASE_URL,
})

router.beforeEach((to, from, next) => {
  if (to.fullPath !== '/login') {
    if (_.isNull(store.state.global.accessToken)) {
      router.push('/login')
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router