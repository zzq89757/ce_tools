import Vue from 'vue'
import App from './App'
import router from './router'
import utils from './utils/main'
import elementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store'
Vue.use(elementUI);
//将工具类挂载到Vue原型 
Vue.prototype.$utils = utils;
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  mode: "history",
  render: h => h(App)
})
