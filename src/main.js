import Vue from 'vue'
import App from './App'
import router from './router'
import utils from './utils/main'
//将工具类挂载到Vue原型 
Vue.prototype.$utils = utils;
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  mode: "history",
  render: h => h(App)
})
