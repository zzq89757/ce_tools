<template>
  <div>
    <nav class="topbar">
      <div class="banner">
        <div class="logo">
          <slot>
            <a href="http://www.vazyme.com" target="blank"
              ><img src="https://crm.vazyme.com/cetool/images/u1102_logo.png"
            /></a>
          </slot>
        </div>
        <router-link
          exact
          v-for="item in destination"
          :to="'/' + item.route"
          class="title"
          :key="item.title"
          >{{ item.title }}
        </router-link>
        <div class="clogo">
          <a class="cloud help">
            <img src="@/assets/img/help.png" />
          </a>
          <a class="cloud" href="http://cloud.vazyme.com:83/" target="blank">
            <img src="@/assets/img/cloud.png" />
          </a>
          <a class="cloud lan">
            <img src="@/assets/img/lan.png" />
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
.router-link-active {
  display: inline-block;
  color: var(--blue);
}
.topbar .banner .router-link-active::after {
  transform: scaleX(1);
}
.topbar {
  /* position: relative; */
  /* display: flex; */
  background-color: var(--white);
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
  padding-top: 2px;
}
.logo {
  margin-top: 6px;
}

.topbar .logo img {
  height: 44px;
}

.topbar .title {
  margin: 0px 30px;
  padding: 16px 0px;
  transition: all 0.1s linear 0s;
}
.topbar .title::after {
  position: absolute;
  bottom: 0;
  left: 0;
  content: "";
  width: 100%;
  height: 3px;
  background-color: var(--blue);
  transform: scaleX(0);
  transition: all 0.4s ease;
}
.topbar .title:hover {
  color: var(--blue);
}
.topbar .title:hover::after {
  transform: scaleX(1);
}

.topbar .banner {
  display: flex;
  justify-content: space-evenly;
}

.clogo {
  display: inline-block;
  width: 200px;
  margin-top: 14px;
  color: var(--grey);
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