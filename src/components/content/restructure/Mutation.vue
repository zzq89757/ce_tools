<template>
  <div>
    <ul>
      <li v-for="item in msg" :key="item.title">{{ item.title }}</li>
    </ul>
    <Input v-for="item in msg[0]" :key="item.title" :message="item.tips">
    </Input>
    <Input v-for="item in msg[1].tips" :key="item[0].num" :message="item">
    </Input>
  </div>
</template>

<script>
import Input from "@/components/content/input/Input";
export default {
  data() {
    return {
      msg: [
        {
          title: "单点突变",
          tips: {
            num: 1,
            message: "请输入突变载体长度",
            tips: "请输入完整的目的序列",
          },
        },
        {
          title: "单/多片段克隆",
          tips: [
            {
              num: 1,
              message: "请输入克隆载体长度",
              tips: "请输入完整的目的序列",
            },
            {
              num: 2,
              message: "请输入各个插入片段长度（以空格分隔）",
              tips: "",
            },
          ],
        },
      ],
    };
  },
  components: { Input },
};
</script>

<style>
</style>