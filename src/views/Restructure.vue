<!-- 重组反应投入量计算 -->
<template>
  <container>
    <div class="card1">
      <Input :message="message1" class="in">
        <div class="check_line">
          <div class="lable_box">
            <input
              checked="true"
              type="radio"
              name="line"
              value="clone"
              id="clone"
              v-model="user_check"
            />
            <label for="clone"> 克隆 </label>
          </div>
          <div class="lable_box">
            <input
              type="radio"
              name="line"
              value="mutation"
              id="mutation"
              v-model="user_check"
            />
            <label for="mutation"> 突变 </label>
          </div>
        </div>
      </Input>
      <Input :message="message2" class="in">
      <div class="check_line">
                <div v-for="item in detail" :key="item.name" class="lable3">
          <input
            type="radio"
            name="clone_detail"
            :value="item.name"
            :id="item.name"
            v-model="user_check_detail"
          />
          <label :for="item.name"> {{ item.tips }}</label>
        </div>
      </div>
      </Input>
      <Input :message="message3" class="in"> </Input>
      <Button></Button>
    </div>
    <component :is="a"> </component>
  </container>
</template>

<script>
import Input from "@/components/content/input/Input";
import Container from "@/components/content/container/Container";
import ImgArea from "@/components/content/img_area/ImgArea";
import Clone from "@/components/content/restructure/Clone";
import Button from "../components/content/button/Button.vue";
export default {
  data() {
    return {
      a: "ImgArea",
      user_check: "clone",
      user_check_detail: "",
      message1: {
        num: 1,
        message: "实验类型",
        tips: "",
      },
      message2: {
        num: 2,
        message: "具体实验类型",
        tips: "",
      },
      message3: {
        num: 3,
        message: "序列长度",
        tips: "多条序列以空格分隔",
      },
      clone_detail: [
        {
          tips: "快速克隆",
          name: "single_clone",
        },
        {
          tips: "单/多片段克隆",
          name: "multi_fragment",
        },
      ],
      mutation_detail: [
        {
          tips: "单点突变",
          name: "single_point",
        },
        {
          tips: "双位点突变",
          name: "double_point",
        },
        {
          tips: "多位点突变",
          name: "multi_point",
        },
      ],
    };
  },

  components: { Input, Container, ImgArea, Clone, Button },

  computed: {
    detail() {
      return this.user_check === "clone"
        ? this.clone_detail
        : this.mutation_detail;
    },
  },

  // mounted: {},

  // methods: {}
};
</script>
<style lang='css' scoped>
.in {
  height: 100px;
  width: 400px;
}
.check_line{
  margin: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.mini_container {
  width: 400px;
}
.lable_box{
  margin: 0px 20px;
}
.lable3{
  margin: 0px 10px;
}
.card1{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
</style>