<!-- 快速克隆组件 -->
<template>
  <div>
    <div>
      <Input :message="tips"></Input>
      <Input class="input_shortseq input2" :message="cut_message">
        <div class="check_line">
          <div>
            <select name="cut1" id="cut1">
              <option value="none">不增加酶切位点</option>
              <option
                :value="item.key"
                v-for="item in jsondata"
                :key="item.value"
              >
                {{ item.value }}
              </option>
            </select>
            <select name="cut2" id="cut2">
              <option value="none">不增加酶切位点</option>
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
    <div>
      <img-area></img-area>
    </div>
  </div>
</template>

<script>
import Input from "@/components/content/input/Input.vue";
import Button from "@/components/content/button/Button";
import jsondata from "@/assets/js/select.json";
import ImgArea from '../components/content/img_area/ImgArea';
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

  components: { Input, Button,ImgArea },

  // computed: {},

  // mounted: {},

  // methods: {},
};
</script>
<style  scoped>
</style>