import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/layout'
Vue.use(Router)

export const constantRoutes = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '',
        title: '首页',
        icon: '',
        name: 'home',
        component: () => import('@/views/home'),
        hidden: false,
        meta: {
          // active: 'login',
        }
      },
      {
        path: 'bookDetail',
        title: '图书详情',
        icon: '',
        name: 'bookDetail',
        component: () => import('@/views/shop/bookDetail'),
        hidden: true,
        meta: {
        }
      },
      
    ]
  },
  
]
export default new Router({
  // mode: 'history',
  routes: constantRoutes
})
