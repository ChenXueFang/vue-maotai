import Vue from 'vue'
import Router from 'vue-router'
import Pos from '@/components/Pos'
import go from '@/components/go'
import news from '@/components/news'
import brand from '@/components/brand'
import wenhua from '@/components/wenhua'
import city from '@/components/city'
import shehui from '@/components/shehui'
import jiu from '@/components/jiu'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Pos',
      component: Pos
    },
    {
      path: '/go',
      name: 'go',
      component: go
    },
    {
      path: '/news',
      name: 'news',
      component: news
    },
    {
      path: '/brand',
      name: 'brand',
      component: brand
    },
    {
      path: '/wenhua',
      name: 'wenhua',
      component: wenhua
    },
    {
      path: '/city',
      name: 'city',
      component: city
    },
    {
      path: '/shehui',
      name: 'shehui',
      component: shehui
    },
    {
      path: '/jiu',
      name: 'jiu',
      component: jiu
    }
  ]
})
