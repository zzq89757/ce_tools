<!-- 快速克隆组件 -->
<template>
  <container>
      <div class="left">
        <Input :message="tips" class="input_seq"></Input>
        <Input class="input_shortseq input2 input_seq" :message="cut_message">
          <div class="check_line">
            <div>
              <select name="cut1" id="cut1">
                <option value="none">不添加酶切位点</option>
                <option
                  :value="item.key"
                  v-for="item in jsondata"
                  :key="item.value"
                >
                  {{ item.value }}
                </option>
              </select>
              <select name="cut2" id="cut2">
                <option value="none">不添加酶切位点</option>
                <option
                  :value="item.key"
                  v-for="item in jsondata"
                  :key="item.value"
                >
                  {{ item.value }}
                </option>
              </select>
            </div>
          </div>
        </Input>
        <Button></Button>
      </div>
      <!-- 图谱预留空间 -->
        <img-area></img-area>
  </container>
</template>

<script>
import Input from "@/components/content/input/Input.vue";
import Button from "@/components/content/button/Button";
import jsondata from "@/assets/js/select.json";
import ImgArea from "../components/content/img_area/ImgArea";
import Container from "@/components/content/container/Container";
export default {
  data() {
    return {
      jsondata,
      tips: {
        num: 1,
        message: "插入片段",
        tips: "至少50bp（自动过滤非AGCT字符）",
      },
      cut_message: {
        num: 2,
        message: "酶切位点",
        tips: "至少50bp（自动过滤非AGCT字符）",
      },
    };
  },

  components: { Input, Button, ImgArea, Container },

  // computed: {},

  // mounted: {},

  // methods: {},
};
</script>
<style  scoped>
.left {
  width: 560px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.input_seq {
  width: 380px;
  height: 220px;
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>