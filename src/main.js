import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router/index'
import './plugins/element.js'
import axios from 'axios'
// 配置请求路径
axios.defaults.baseURL = 'http://api.lizhenglong.cn:8000/'
// 配置vuex
import store from './store/index'
Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.prototype.$http = axios
// 加载项目的自定义配置文件
import settings from "./settings";
// 把全局配置设置一个属性
Vue.prototype.$settings = settings;
// 引入阿里图标
import './assets/iconfont/iconfont.css'
new Vue({
  render: h => h(App),
  store,
  router:router,
}).$mount('#app')
