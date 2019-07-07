import Vue from 'vue'
import Router from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('./components/auth/Login')
  },
  {
    path: '/calendar',
    name: 'calendar',
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
    if (localStorage.getItem('accessToken') === null) {
      router.replace('/login')
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router