<!--  -->
<template>
  <div class="destination_seq input_public">
    <div class="info_table">
      <span class="tips">1</span>
      <span class="info">目的序列</span>
    </div>
    <textarea
      type="text"
      class="input_seq"
      placeholder="请输入完整的目的序列"
      v-limit-input-basen
      spellcheck="false"
      @change="userInput"
    ></textarea>
  </div>
</template>

<script>
export default {
  data() {
    return {
        current_seq:""
    };
  },

  components: {},

  computed: {},

  mounted: {},

  methods: {
      userInput(){
          this.$emit("userChange",this.current_seq)
      }
  },
  props: {
      input_seq:{
          type:String,
          required:false,
          default:""
      }
  },
};
</script>
<style lang='scss' scoped>
</style>