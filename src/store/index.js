import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    seq:'aaa',
    reads:'cs',
    mdTag:'3A4T6C'
  },
  mutations: {
    //接受数据并同步保存至state
    receive(state,payload){
      this.state.seq=payload.ref;
      this.state.reads=payload.reads;
      this.state.mdTag=payload.mdTag;
    }
  },
  actions: {
  },
  modules: {
  }
})
