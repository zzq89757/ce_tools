<template>
  <div>
    <ul>
      <li v-for="item in msg" :key="item.title" @click="aaa=item.com">{{ item.title }}</li>
    </ul>
    <Input :message="msg[0].tipsobj" v-if="aaa==='sim'">
    </Input>
    <Input v-for="item in msg[1].tipsary" :key="item.title" :message="item" v-else>
    </Input>
  </div>
</template>

<script>
import Input from "@/components/content/input/Input";
export default {
  data() {
    return {
      aaa:'sim',
      msg: [
        {
          title: "快速克隆",
          com:"sim",
          tipsobj: {
            num: 1,
            message: "请输入插入片段长度",
            tips: "请输入完整的目的序列",
          },
        },
        {
          title: "单/多片段克隆",
          com:"mul",
          tipsary: [
            {
              num: 1,
              message: "请输入克隆载体长度",
              tips: "请输入完整的目的序列",
            },
            {
              num: 2,
              message: "请输入各个插入片段长度",
              tips: "以空格分隔",
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