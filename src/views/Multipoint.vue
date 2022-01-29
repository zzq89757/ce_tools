<template>
  <div>
    <div id="component">
      <div class="left">
        <Input class="input_seq" :message="input_message_upstream"></Input>
        <Input class="input_shortseq" :message="short_input_message"></Input>
        <Input class="input_seq" :message="input_message_downstream"></Input>
        <Button></Button>
      </div>
      <img-area></img-area>
    </div>
  </div>
</template>

<script>
import cutpoint from "@/assets/js/select.json";
import Input from "@/components/content/input/Input";
import Button from "@/components/content/button/Button";
import ImgArea from "@/components/content/img_area/ImgArea";
export default {
  name: "MultiFragment",
  data() {
    return {
      cutpoint,
      user_input: "",
      input_message_upstream: {
        num: 1,
        message: "突变位点上游序列",
        tips: "序列长度至少50bp",
      },
      input_message_downstream: {
        num: 3,
        message: "突变位点下游序列",
        tips: "序列长度至少50bp",
      },
      short_input_message: {
        num: 2,
        message: "突变位点突变后的序列",
        tips: "序列长度不超过50bp",
      },
    };
  },

  components: { Input,Button,ImgArea },

  computed: {
    // just filter user input
    filterInput() {
      return this.user_input.toUpperCase().replace(/[^AGCT\n]+/g, "");
    },
  },

  // mounted: {},

  // methods: {},
};
</script>
<style scoped>
#component {
  width: 1200px;
  display: flex;
  justify-content: space-around;
  margin: 4% auto;
  padding: 10px 0;
  border: 1px solid rgb(221, 221, 221);
  border-radius: 4px;
}
.left {
  width: 560px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.input2 {
  width: 380px;
  display: inline-block;
  background-color: var(--white);
  border: 1px solid rgb(221, 221, 221);
  border-radius: 4px;
}
.tips {
  background-color: var(--actived);
  float: left;
  font-family: Arial, Helvetica, sans-serif;
  color: var(--white);
  font-weight: 600;
  padding: 4px 8px;
  border-radius: 4px 0px 0px;
}

.info {
  float: left;
  margin-left: 6px;
  line-height: 28px;
}
.info_table {
  width: 380px;
  overflow: hidden;
}
textarea {
  box-sizing: border-box;
  padding: 6px;
  font-size: 16px;
  resize: none;
}

#user_input {
  width: 429px;
}

.input_seq {
  width: 380px;
  height: 180px;
  margin-top: 10px;
  margin-bottom: 10px;
}
.input_shortseq {
  width: 380px;
  height: 90px;
}
.check_line {
  display: flex;
  justify-content: space-around;
  margin: 10px 0;
}

.check_line label {
  display: inline-block;
}
</style>