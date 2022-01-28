<template>
  <div>
    <div id="component">
      <div class="left">
        <Input class="input_seq"></Input>
        <Input class="input_shortseq input2" :message="input2_message">
          <div class="check_line">
            <div>
              <input type="radio" name="line" value="single" id="single" />
              <label for="single">单酶切线性化 </label>
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

        <Input class="input_seq" :message="input3_message"></Input>
        <Button></Button>
      </div>

      <div id="image_area">
        <div class="picture">
          <h2>{{ filterInput }}</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import cutpoint from "@/assets/js/select.json";
import Input from "@/components/content/input/Input";
import Button from "@/components/content/button/Button";
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

  components: { Input,Button },

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
  margin: 30px auto;
  margin-top: 30px;
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
  height: 220px;
  display: inline-block;
  background-color: var(--white);
  /* border: 1px solid rgb(221, 221, 221); */
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


#image_area {
  width: 560px;
  height: 560px;
  margin-top: 8px;
  background-color: var(--white);
  box-sizing: border-box;
  border: 1px solid var(--grey);
  border: 1px solid rgb(221, 221, 221);
  border-radius: 4px;
}
</style>