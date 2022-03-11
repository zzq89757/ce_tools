import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


const MultiFragment = () => import('@/views/MultiFragment')
const Multipoint = () => import('@/views/Multipoint')
const Simple = () => import('@/views/Simple')
const Tmcal = () => import('@/views/Tmcal')
const DNAsequence = () => import('@/views/DNAsequence')
const Restructure = () => import('@/views/Restructure')
const BaseBox = () => import('@/components/content/base/BaseBox')

Vue.use(Router)
const routes = [{
  path: '/',
  redirect: '/simple',
  name: 'App',
}, {
  path: '/multifragment',
  name: 'MultiFragment',
  component: MultiFragment
}, {
  path: '/simple',
  name: 'simple',
  component: Simple
}, {
  path: '/multipoint',
  name: 'multipoint',
  component: Multipoint
}, {
  path: '/restructure',
  name: 'restructure',
  component: Restructure
}, {
  path: '/dnasuquence',
  name: 'dnasuquence',
  component: DNAsequence
}, {
  path: '/tmcal',
  name: 'tmcal',
  component: Tmcal
}, {
  path: '/basebox',
  name: 'basebox',
  component: BaseBox
}]
export default new Router({
  mode: 'history',
  routes
})