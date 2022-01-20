<!--  -->
<template>
  <div class="destination_seq input_public">
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

  computed: {
    filter_seq(){
      return this.current_seq.toUpperCase().replace(/[^AGCT\n]+/g, "")
    }
  },

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
  margin: 15px;
  margin-bottom: 22px;
  overflow: hidden;
  background-color: var(--white);
  border: 1px solid;
  box-shadow: rgba(0, 0, 0, 0.117647) 0px 1px 1px,
    rgba(34, 34, 34, 0.74) 0px 0px 1px;
}
.tips {
  background-color: var(--blue);
  float: left;
  font-family: Arial, Helvetica, sans-serif;
  color: var(--white);
  font-weight: 600;
  padding: 4px 8px;
}
.info {
  float: left;
  margin-left: 6px;
  line-height: 28px;
}
.input_seq {
  width: 1500px;
  width: 95%;
  resize: none;
  height: 150px;
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 18px;
  resize: none;
  outline: none;
}
</style>