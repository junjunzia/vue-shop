import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import './assets/css/global.css'// 导入全局样式
import axios from 'axios'// 导入axios包
axios.defaults.baseURL = 'http://www.ysqorz.top:8888/api/private/v1/' // 配置请求的根路径
Vue.prototype.$http = axios // 将axios包挂在vue的原型中，可以通过this直接访问到http，从而发起axios请求
Vue.config.productionTip = false
Vue.use(ElementUI)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
