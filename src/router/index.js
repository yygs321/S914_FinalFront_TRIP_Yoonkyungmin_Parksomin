import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TripLoginView from '../views/TripLoginView.vue'
import TripSignupView from '../views/TripSignupView'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: "/login",
    name: 'login',
    component: TripLoginView
  },
  {
    path: "/signup",
    name: 'signup',
    component: TripSignupView
  }
]

const router = new VueRouter({
  mode: "history",
  routes
})

export default router
