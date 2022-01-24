<template>
  <nav-bar-item :pathway="destination"></nav-bar-item>
</template>

<script>
import NavBarItem from "@/components/common/navbar/NavBarItem.vue";
export default {
  components: { NavBarItem },
  name: "NavBar",
  data() {
    return {
      destination: [
        {
          title: "快速克隆",
          route: "simple",
        },
        {
          title: "单/多片段克隆",
          route: "multifragment",
        },
        {
          title: "单/多点突变",
          route: "multipoint",
        },
        {
          title: "重组反应DNA用量计算",
          route: "restructure",
        },
        {
          title: "DNA序列处理",
          route: "dnasuquence",
        },
        {
          title: "引物Tm值计算",
          route: "tmcal",
        },
      ],
    };
  },

  // components: {},

  /* computed: {
   
     },  */

  // mounted: {

  // },

  /* methods: {
    } */
};
</script>

<style lang="css" scoped>
</style>