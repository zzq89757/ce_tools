<!-- 重组反应投入量计算 -->
<template>
  <container>
    <div>
      <Input :message="message1" class="in">
        <div class="check_line">
          <div>
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
          <div>
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
        <div v-for="item in detail" :key="item.name">
          <input
            type="radio"
            name="clone_detail"
            :value="item.name"
            :id="item.name"
            v-model="user_check_detail"
          />
          <label :for="item.name"> {{ item.tips }}</label>
        </div>
      </Input>
      <Input :message="message3" class="in"> </Input>
    </div>
    {{ user_check }}
    {{ user_check_detail }}
  <component :is="a">
  </component>
  </container>
</template>

<script>
import Input from "@/components/content/input/Input";
import Container from "@/components/content/container/Container";
export default {
  data() {
    return {
      a: "Container",
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
        tips: "",
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

  components: { Input, Container },

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
  display: block;
}
</style>