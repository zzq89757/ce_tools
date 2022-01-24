<template>
  <div>
    <div id="component">
      <div class="left">
        <Input class="input_seq"></Input>
        <div class="input2" style="">
          <div class="info_table">
            <span class="tips">2</span>
            <span class="info">线性化方式</span>
          </div>
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
        </div>

        <div class="enzyme"></div>
        <Input class="input_seq" :message="input_message"></Input>
        <div class="button">
          <input type="button" value="生成引物" />
        </div>
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
export default {
  name: "MultiFragment",
  data() {
    return {
      cutpoint,
      user_input: "",
      input_message: {
        num: 3,
        message: "插入片段",
        tips: "多条插入片段请以换行符分隔",
      },
    };
  },

  components: { Input },

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
/* .input_public {
  margin: 15px;
  margin-bottom: 22px;
  overflow: hidden;
  background-color: var(--white);
  border: 1px solid;
  box-shadow: rgba(0, 0, 0, 0.117647) 0px 1px 1px,
    rgba(34, 34, 34, 0.74) 0px 0px 1px;
} */
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
.resize {
  height: 200px;
}
.check_line {
  display: flex;
  justify-content: space-around;
  margin: 10px 0;
}

.check_line label {
  display: inline-block;
}

.button,
.button input {
  display: inline-block;
  width: 380px;
  height: 60px;
  color: var(--white);
  font-size: 18px;
  background-color: var(--actived);
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