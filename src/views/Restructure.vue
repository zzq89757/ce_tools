<!--  -->
<template>
  <container>
    <div>
      <Input :message="message1"> </Input>
      <Input :message="message2"> </Input>
      <Input :message="message3"> </Input>
    </div>
  </container>
</template>

<script>
import Input from "@/components/content/input/Input";
import Container from "@/components/content/container/Container";
export default {
  data() {
    return {
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
    };
  },

  components: { Input, Container },

  // computed: {},

  // mounted: {},

  // methods: {}
};
</script>
<style lang='css' scoped>
</style>