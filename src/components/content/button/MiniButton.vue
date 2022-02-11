<!--  -->
<template>
  <div>
    <button :class="{'clean':content==='清空'}">{{content}}</button>
  </div>
</template>

<script>
import Button from './Button.vue';
export default {
  // data () {
  //   return {
  //   };
  // },
  props:{
    content:{
      type:String,
      default:"按钮",
      require:true
    }
  },
  components: {Button},

  // computed: {},

  // mounted: {},

  // methods: {}
}

</script>
<style lang='css' scoped>
button {
  width: 80px;
  height: 40px;
  float: left;
  margin-right: 20px;
  position: relative;
  color: var(--white);
  font-size: 18px;
  background-color: var(--actived);
  background-color: #04439aca;
  border: 1px solid #04439ac7;
  border-radius: 4px;
  cursor: pointer;
  transition: 0.1s linear all;
}
button:hover {
  color: #fff;
  background-color: var(--actived);
  border: 2px solid var(--actived);
}
.clean {
  color: var(--actived);
  background-color: var(--white);
  border: 2px solid var(--actived);
}
</style>