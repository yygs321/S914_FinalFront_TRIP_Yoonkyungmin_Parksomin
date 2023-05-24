import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import store from './store'

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import SummernoteEditor from 'vue3-summernote-editor';

Vue.config.productionTip = false


// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

new Vue({
  router,
  render: h => h(App),
  store,
  component: ('SummernoteEditor', SummernoteEditor)
}).$mount('#app')

