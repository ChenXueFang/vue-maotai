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
import jituan from '@/components/jituan'
import lingdao from '@/components/lingdao'
import go_zi from '@/components/go_zi'

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
      component: go,
      children:[
        {path: '',name:'go_zi',component:go_zi},
        {path: 'jituan',name:'jituan',component:jituan},
        {path: 'lingdao',name:'lingdao',component:lingdao}
      ]
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
