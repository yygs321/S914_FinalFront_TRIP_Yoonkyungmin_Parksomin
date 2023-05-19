import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TripLoginView from '../views/TripLoginView.vue'
<<<<<<< HEAD
import TripSignupView from '../views/TripSignupView'
import TripListView from '../views/TripListView'
=======
import TripSignupView from '../views/TripSignupView.vue'
import MyPageView from '../views/MyPageView.vue'
>>>>>>> ac41ce6ba350a17bede613004bf9c60ea097f671



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
  },
  {
    path: "/list",
    name: 'list',
    component: TripListView
  },
  
  {
    path: "/mypage",
    name: 'mypage',
    component: MyPageView
  }
]

const router = new VueRouter({
  mode: "history",
  routes
})

export default router
