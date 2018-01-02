import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

// route-level code splitting
const Home = () => import('../views/Home/index.vue');
const User = () => import('../views/User/index.vue');

export function createRouter() {
  return new Router({
    mode: 'history',
    fallback: false,
    scrollBehavior: () => ({y: 0}),
    routes: [
      {path: '/', component: Home},
      {path: '/user', component: User}
    ]
  })
}
