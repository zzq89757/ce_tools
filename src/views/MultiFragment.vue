<template>
  <container>
    <div class="left">
      <Input class="input_seq"></Input>
      <Input class="input_shortseq input2" :message="input2_message">
        <div class="check_line">
          <div>
            <input type="radio" name="line" value="single" id="single" />
            <label for="single"> 单酶切线性化 </label>
          </div>
          <div>
            <input type="radio" name="line" value="double" id="double" />
            <label for="double"> 双酶切线性化 </label>
          </div>
          <div>
            <input type="radio" name="line" value="pcr" id="pcr" />
            <label for="pcr"> PCR扩增线性化 </label>
          </div>
        </div>
      </Input>
      <Input class="input_seq" :message="input3_message">
        <textarea
          type="text"
          class="input_seq"
          v-limit:[1]
          spellcheck="false"
          :placeholder="input3_message.tips"
        ></textarea>
      </Input>
      <Button></Button>
    </div>
    <img-area></img-area>
  </container>
</template>

<script>
import cutpoint from "@/assets/js/select.json";
import Input from "@/components/content/input/Input";
import Button from "@/components/content/button/Button";
import ImgArea from "@/components/content/img_area/ImgArea";
import Container from "../components/content/container/Container";
export default {
  name: "MultiFragment",
  data() {
    return {
      cutpoint,
      user_input: "",
      input2_message: {
        num: 2,
        message: "线性化方式",
        tips: "多条插入片段请以换行符分隔",
      },
      input3_message: {
        num: 3,
        message: "插入片段",
        tips: "多条插入片段请以换行符分隔",
      },
    };
  },

  components: { Input, Button, ImgArea, Container },

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
.left {
  width: 560px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.input2 {
  width: 380px;
  height: 220px;
  display: inline-block;
  background-color: var(--white);
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

.input_seq {
  width: 380px;
  height: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
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