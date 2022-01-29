<!--  -->
<template>
  <div id="container">
      <slot></slot>
  </div>
</template>

<script>
export default {
  data () {
    return {
    };
  },

  components: {},

  computed: {},

  mounted: {},

  methods: {}
}

</script>
<style lang='css' scoped>
#container{
  width: 1200px;
  display: flex;
  justify-content: space-around;
  margin: 4% auto;
  padding: 10px 0;
  border: 1px solid rgb(221, 221, 221);
  border-radius: 4px;
}
</style>