<!-- 快速克隆组件 -->
<template>
  <div>
    <Input :message="tips"></Input>
  </div>
</template>

<script>
import Input from "@/components/content/input/Input.vue";
export default {
  data() {
    return {
      tips: {
        num: 1,
        message: "插入片段",
        tips: "至少50bp（自动过滤非AGCT字符）",
      },
    };
  },

  components: { Input },

  // computed: {},

  // mounted: {},

  // methods: {},
};
</script>
<style  scoped>
</style>