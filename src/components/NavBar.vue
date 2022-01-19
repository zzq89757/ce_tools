<template>
  <div>
    <nav class="topbar">

      <div class="banner">
        <div class="logo">
          <a href="http://www.vazyme.com" target="blank"><img
              src="https://crm.vazyme.com/cetool/images/u1102_logo.png" /></a>
        </div>
        <router-link exact :to="'/'+ en[index]" class="title" v-for="(item, index) in title" :key="item.id">{{ item }}
        </router-link>
        <div class="clogo">
          <a class="cloud help">
            <img src="../assets/img/help.png">
          </a>
          <a class="cloud" href="http://cloud.vazyme.com:83/" target="blank">
            <img src="../assets/img/cloud.png">
          </a>
          <a class="cloud lan">
            <img src="../assets/img/lan.png">
          </a>
        </div>
      </div>

    </nav>
  </div>
</template>

<script>
  export default {
    name: "NavBar",
    data() {
      return {
        title: [
          "快速克隆",
          "单/多片段克隆",
          "单/多点突变",
          "重组反应DNA用量计算",
          "DNA序列处理",
          "引物Tm值计算"
        ],
        en: [
          "simple",
          "multifragment",
          "multipoint",
          "restructure",
          "dnasuquence",
          "tmcal"
        ],
      }
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
  * {
    padding: 0;
    margin: 0;
  }

  a {
    display: inline-block;
    position: relative;
    text-decoration: none;
    color: #999;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 15px;
    font-weight: 600;
    text-shadow: 0 0 1px rgb(255 255 255 30%);
  }

  .router-link-active {
    display: inline-block;
    color: #04429a;
    border-bottom: 3px solid #04429a;
  }

  .topbar {
    /* position: relative; */
    /* display: flex; */
    background-color: #ffffff;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
    padding-top: 8px;
  }
  .logo{

    margin-top: 6px;
  }
  
  .topbar .logo img {
    height: 44px;
  }

  .topbar .title {
    margin: 14px 30px;
    padding: 5px 0px;
    transition: all 0.1s linear 0s;
  }

  .topbar .title:hover {
    color: #04429a;
    border-bottom: 3px solid #04429a;
  }

  .topbar .banner {
    display: flex;
    justify-content: space-evenly
  }

  .clogo {
    display: inline-block;
    width: 200px;
    margin-top: 14px;
    color: #999;
    cursor: pointer;
  }

  .cloud {
    display: inline-block;
    line-height: 25px;
    margin: 0px 8px;
  }

  .clogo img {
    width: 29px;
    height: 29px;
  }
</style>