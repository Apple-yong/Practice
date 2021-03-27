import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'

Vue.use(VueRouter)

const routes = [
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
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
  },
  {
    path: '/user/:id',
    name: 'User',
    component: () => import('@/views/User.vue'),
    children: [
      {
        path: '/user/:id/content',
        component: () => import('@/views/User_content.vue')
      }
    ]
  },
  {
    path: '/fenlei',
    name: 'Fenlei',
    component: () => import('@/views/tabbarTestView/fenye.vue')
  },
  {
    path: '/gouwu',
    name: 'Gouwu',
    component: () => import('@/views/tabbarTestView/gouwu.vue')
  },
  {
    path: '/me',
    name: 'Me',
    component: () => import('@/views/tabbarTestView/me.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
