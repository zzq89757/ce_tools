<template>
  <nav-bar-item :pathway="destination">
    <div slot="left">
      <a href="http://www.vazyme.com" target="blank"
        ><img src="https://crm.vazyme.com/cetool/images/u1102_logo.png"
      /></a>
    </div>
    <div slot="right">
      <a>
        <img src="@/assets/img/help_blur.png" />
      </a>
      <a href="http://cloud.vazyme.com:83/" target="blank">
        <img src="@/assets/img/cloud_blur.png" />
      </a>
      <a @click="alert_message('你被骗啦,这个工具还没有英文版的哦~')">
        <img src="@/assets/img/lan_blur.png" />
      </a>
    </div>
  </nav-bar-item>
</template>

<script>
import NavBarItem from "@/components/content/navbar/NavBarItem.vue";
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