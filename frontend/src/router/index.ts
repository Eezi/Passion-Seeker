import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',


    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/:categoryName',
    name: 'PassionCategory',
    props: true,
    component: () => import('../views/PassionCategory.vue')
    
  },
  {
    path: '/passion-test/:question',
    name: 'PassionTest',
    props: true,
    component: () => import('../views/PassionTest.vue')
    
  },
  {
    path: '/passion-test/results',
    name: 'TestResults',
    props: true,
    component: () => import('../views/TestResults.vue')
    
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
