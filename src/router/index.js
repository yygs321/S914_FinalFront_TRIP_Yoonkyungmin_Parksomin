import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TripLoginView from '../views/TripLoginView.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
<<<<<<< HEAD
  {
    path: "/login",
    name: 'login',
    component: TripLoginView
  }
]

const router = new VueRouter({
  mode:"history",
  routes
=======
]

const router = new VueRouter({
  routes,
  mode:"history"
>>>>>>> 5594bba922da0ab25ebdb659126df75e058da53b
})

export default router
