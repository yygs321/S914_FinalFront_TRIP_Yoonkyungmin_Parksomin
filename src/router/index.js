import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TripLoginView from '../views/TripLoginView.vue'
import TripSignupView from '../views/TripSignupView'
import TripListView from '../views/TripListView'
import MyPageView from '../views/MyPageView.vue'
import TripDetailView from '../views/TripDetailView.vue'
import NoticeBoardView from '../views/NoticeBoardView.vue'
import TripNoticeView from '../views/TripNoticeView.vue'
import NoticeOneView from '../views/NoticeOneView.vue'
import NoticeModifyView from '../views/NoticeModifyView.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: "/users/login",
    name: 'login',
    component: TripLoginView
  },
  {
    path: "/signup",
    name: 'signup',
    component: TripSignupView
  },
  {
    path: "/list/all/:keyword/:category",
    name: 'list',
    component: TripListView
  },
  {
    path: "/list/keyword/:keyword",
    name: 'keywordList',
    component: TripListView
  },
  {
    path: "/list/category/:category",
    name: 'categoryList',
    component: TripListView
  },

  {
    path: "/mypage",
    name: 'mypage',
    component: MyPageView
  },

  {
    path: "/detail/:contentId",
    name: 'detail',
    component: TripDetailView
  },

  {
    path: "/notices",
    name: 'notice',
    component: NoticeBoardView
  },
  {
    path: "/insertNotice",
    name: 'insertNotice',
    component: TripNoticeView
  },
  {
    path: "/notices/:id",
    name: 'noticeOne',
    component: NoticeOneView
  },
    {
    path: "/notices/modify/:id",
    name: 'noticeModify',
    component: NoticeModifyView
  },

]

const router = new VueRouter({
  mode: "history",
  routes
})

export default router
