import Vue from 'vue'
import Router from 'vue-router'
import MultiFragment from '@/components/MultiFragment'
import Simple from '@/components/Simple'
import Multipoint from '@/components/Multipoint'
import Tmcal from '@/components/Tmcal'
import DNAsequence from '@/components/DNAsequence'
import Restructure from '@/components/Restructure'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    // mode: 'history',
    {
      path: '/',
      // redirect:'/multifragment',
      redirect:'/simple',
      name: 'App',
      mode:"history"
      // component: App
    },{
      path:'/multifragment',
      name:'MultiFragment',
      component:MultiFragment
    },{
      path:'/simple',
      name:'simple',
      mode:"history",
      component:Simple
    },{
      path:'/multipoint',
      name:'multipoint',
      component:Multipoint
    },{
      path:'/restructure',
      name:'restructure',
      component:Restructure
    },{
      path:'/dnasuquence',
      name:'dnasuquence',
      component:DNAsequence
    },{
      path:'/tmcal',
      name:'tmcal',
      component:Tmcal
    }
  ]
})
