<template>
  <div>
    <div id="component">
      <div id="user_input">
        <div class="destination_seq input_public">
          <div class="info_table">
            <span class="tips">1</span>
            <span class="info">目的序列</span>
          </div>
          <textarea
            type="text"
            class="input_seq"
            placeholder="请输入完整的目的序列"
            spellcheck="false"
            v-limit-input-base
          ></textarea>
        </div>

        <div class="line_style input_public">
          <div class="info_table">
            <span class="tips">2</span>
            <span class="info">线性化方式</span>
          </div>
          <div class="check_line">
            <input type="radio" name="line" value="single" id="single" />
            <label for="single">单酶切线性化 </label>
            <input type="radio" name="line" value="double" id="double" />
            <label for="double"> 双酶切线性化 </label>
            <input type="radio" name="line" value="pcr" id="pcr" />
            <label for="pcr"> PCR扩增线性化 </label>
          </div>
        </div>

        <div class="enzyme"></div>

        <div class="insert input_public">
          <div class="info_table">
            <span class="tips">3</span>
            <span class="info">插入片段</span>
          </div>
          <div class="insert1">
            <textarea
              type="textaera"
              class="input_seq"
              placeholder="请输入插入片段"
              spellcheck="false"
              v-limit-input-base
            ></textarea>
          </div>
        </div>
        <div class="button">
          <input type="button" value="生成引物" />
        </div>
      </div>

      <div id="image_area"></div>
    </div>
  </div>
</template>

<script>
import cutpoint from "@/assets/js/select.json";
export default {
  name: "MultiFragment",
  data() {
    return {
      cutpoint,
    };
  },

  // components: {},

  // computed: {},

  // mounted: {},

  // methods: {},
};
</script>
<style scoped>
#component {
  display: flex;
  justify-content: space-evenly;
  margin-top: 30px;
}

.input_public {
  margin: 15px;
  margin-bottom: 22px;
  overflow: hidden;
  background-color: var(--white);
  border: 1px solid;
  box-shadow: rgba(0, 0, 0, 0.117647) 0px 1px 1px,
    rgba(34, 34, 34, 0.74) 0px 0px 1px;
}

.info_table {
  margin-bottom: 4px;
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
  height: 150px;
  margin-top: 10px;
  margin-bottom: 10px;
}

.check_line {
  display: inline-block;
  margin: 10px;
}

.check_line label {
  display: inline-block;
}

.button,
.button input {
  display: inline-block;
  width: 400px;
  height: 60px;
  color: var(--white);
  font-size: 18px;
  background-color: var(--blue);
}

#image_area {
  width: 610px;
  height: 610px;
  margin-top: 12px;
  box-sizing: border-box;
  border: 1px solid var(--grey);
}
</style>