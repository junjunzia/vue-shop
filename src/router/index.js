import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'

Vue.use(VueRouter)

const routes = [
  // 重定向
  {
    // 改进重定向：加上这部分把path改为/，重定向为/login，这样就可以让用户访问/的时候重定位到/login
    // 也就是当用户访问http://localhost:8082这个根路径时，自动跳转到http://localhost:8082/#/login
    path: '/',
    redirect: '/login'
  },
  // 路径跳转到Login组件
  {
    path: '/login',
    component: Login
  },
  {
    path: '/home',
    component: Home
  }
]

const router = new VueRouter({
  routes
})

// 挂载路由导航守卫
router.beforeEach((to, from, next) => {
  // to将要访问的路径，from代表从那个路径跳转而来，next是一个函数表示放行强制跳转
  if (to.path === '/login') return next()
  // 获取token
  const tokenStr = window.sessionStorage.getItem('token')
  if (!tokenStr) return next('/login')
  next()
})

export default router
