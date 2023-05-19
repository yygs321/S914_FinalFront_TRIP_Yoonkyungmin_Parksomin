import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TripLoginView from '../views/TripLoginView.vue'
import TripSignupView from '../views/TripSignupView'
import TripListView from '../views/TripListView'
import MyPageView from '../views/MyPageView.vue'
import NoticeListView from '../views/NoticeListView.vue'



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
  },
  {
    path: "/notice",
    name: 'notice',
    component: NoticeListView
  }
]

const router = new VueRouter({
  mode: "history",
  routes
})

export default router
