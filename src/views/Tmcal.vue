<!--  -->
<template>
  <div>
    <input v-limit-input-base >

  </div>
</template>

<script>
import Vue from 'vue';
// 创建一个限制用户输入四种碱基并自动转大写的自定义指令
// Vue.directive('LimitInputBase', {
//   bind(el) {
//     el.oninput = () => {
//       el.value = el.value.toUpperCase().match(/[AGCT]+/g);
//       el.value = el.value.replace(/,/g,'');replace();
//     };
//   },
// });
export default {
  data () {
    return {

    };
  },
  filters:{
    },
  // components: {},

  computed: {
    
    },

  mounted: {
    inputLimit(){
      console.log($event);
      return (/[\d]/.test(String.fromCharCode($event.keyCode || $event.which)))
    }

  },

  // methods: {}
}

</script>
<style  scoped>
</style>