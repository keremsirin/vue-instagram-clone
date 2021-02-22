import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/direct',
    name: 'Direct',
    component: () => import(/* webpackChunkName: "profile" */ '../views/direct')
  },
  {
    path: '/explore',
    name: 'Explore',
    component: () =>
      import(/* webpackChunkName: "profile" */ '../views/explore')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () =>
      import(/* webpackChunkName: "profile" */ '../views/profile'),
    children: [
      {
        path: '',
        name: 'ProfilePosts',
        component: () =>
          import(/* webpackChunkName: "profile" */ '../views/profile/posts')
      },
      {
        path: 'igtv',
        name: 'ProfileIGTV',
        component: () =>
          import(/* webpackChunkName: "profile" */ '../views/profile/igtv')
      },
      {
        path: 'saved',
        name: 'ProfileSaved',
        component: () =>
          import(/* webpackChunkName: "profile" */ '../views/profile/saved')
      },
      {
        path: 'tagged',
        name: 'ProfileTagged',
        component: () =>
          import(/* webpackChunkName: "profile" */ '../views/profile/tagged')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
