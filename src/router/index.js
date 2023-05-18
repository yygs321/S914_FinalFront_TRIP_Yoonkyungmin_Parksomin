import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TripLoginView from '../views/TripLoginView.vue'
import TripSigninView from '../views/TripSigninView'



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
    path: "/signin",
    name: 'signin',
    component: TripSigninView
  }
]

const router = new VueRouter({
  mode: "history",
  routes
})

export default router
