import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router/index'
import './plugins/element.js'
import axios from 'axios'
// 配置请求路径
axios.defaults.baseURL = 'http://timemeetyou.com:8889/api/private/v1/'
// 配置vuex
import store from './store/index'
Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.prototype.$http = axios

new Vue({
  render: h => h(App),
  store,
  router:router,
}).$mount('#app')
