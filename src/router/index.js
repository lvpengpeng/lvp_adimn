import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '@/pages/IndexPage'
import OrderListPage from '@/pages/OrderListPage'
import DetailPage from '@/pages/detail'
import DetailAnaPage from '../pages/detail/analysis'
Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path: '/',
      redirect: '/indexpages'
    },
    {
      path: '/indexpages',
      component: IndexPage
    },
    {
      path: '/orderList',
      component: OrderListPage
    },
    {
      path:'/detail',
      component: DetailPage,
      redirect: '/detail/analysis',
      children:[
        {
          path:'analysis',
          component: DetailAnaPage
        }
      ]
    }
  ]
})
