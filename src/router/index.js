import { createRouter, createWebHistory } from 'vue-router'

import ShopView from '../views/ShopView.vue'


const routes = [
  {
    path: '/',
    name: 'shop',
    component: ShopView

  },
  {
    path: '/manage',
    name: 'manage',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AdminView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
