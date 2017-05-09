import Vue from 'vue'
import VueRouter from 'vue-router'

const Overview = r => require.ensure([], () => r(require('./pages/Overview/Overview.vue')), 'overview')
const Stars = r => require.ensure([], () => r(require('./pages/Stars/Stars.vue')), 'stars')
const Repositories = r => require.ensure([], () => r(require('./pages/Repositories/Repositories.vue')), 'repositories')
const ErrorPage = r => require.ensure([], () => r(require('./pages/Error/Error')), 'error')

Vue.use(VueRouter)

export const routes = [
  {
    path: '/',
    name: 'overview',
    component: Overview
  },
  {
    path: '/stars',
    name: 'stars',
    component: Stars
  },
  {
    path: '/repositories',
    name: 'repositories',
    component: Repositories
  },
  {
    path: '*',
    name: 'error',
    component: ErrorPage
  }
]

export default new VueRouter({
  mode: 'history',
  routes
})
