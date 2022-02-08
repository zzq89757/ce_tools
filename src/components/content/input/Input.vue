<!--  -->
<template>
  <div class="input_public">
    <div class="info_table">
      <span class="tips">{{ message.num }}</span>
      <span class="info">{{ message.message }}</span>
    </div>
    <slot>
      <textarea
        type="text"
        class="input_seq"
        :placeholder="message.tips"
        v-limit-input-basen
        spellcheck="false"
        v-model="current_seq"
        @input="userInput"
      ></textarea>
    </slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      current_seq: "",
    };
  },
  props: {
    message: {
      tpye: Object,
      required: false,
      default: {
        num: 1,
        message: "目的序列",
        tips: "请输入完整的目的序列",
      },
    },
  },
  components: {},

  computed: {},

  mounted: {},

  methods: {
    userInput() {
      this.$emit(
        "uChange",
        this.current_seq.toUpperCase().replace(/[^AGCT\n]+/g, "")
      );
      console.log("%c" + this.current_seq, "color:yellow");
    },
  },
};
</script>
<style lang='css' scoped>
.input_public {
  width: 500px;
  height: 500px;
  display: inline-block;
  overflow: hidden;
  background-color: var(--white);
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.117647) 0px 1px 1px,
    rgba(34, 34, 34, 0.74) 0px 0px 1px;
}
.tips {
  background-color: var(--actived);
  float: left;
  font-family: Arial, Helvetica, sans-serif;
  color: var(--white);
  font-weight: 600;
  padding: 5px 8px;
}
.info {
  float: left;
  margin-left: 6px;
  line-height: 30px;
}
.info_table {
  width: 100%;
  overflow: hidden;
  /* border-bottom: 1px solid #ccc; */
}
.input_seq {
  width: calc(100% - 12px);
  height: 460px;
  height: calc(100% - 45px);
  resize: none;
  margin-bottom: 10px;
  resize: none;
  outline: none;
  border: none;
}
</style>