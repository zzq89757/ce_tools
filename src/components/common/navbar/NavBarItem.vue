<template>
  <div>
    <nav class="topbar">
      <div class="banner">
        <div class="logo">
          <slot name="left">
            <a href="http://www.vazyme.com" target="blank"
              ><img src="https://crm.vazyme.com/cetool/images/u1102_logo.png"
            /></a>
          </slot>
        </div>
        <router-link
          exact
          v-for="item in pathway"
          :to="'/' + item.route"
          class="title"
          :key="item.title"
          >{{ item.title }}
        </router-link>
        <div class="clogo">
          <slot name="right">
            <a class="cloud help">
              <img src="@/assets/img/help.png" />
            </a>
            <a class="cloud" href="http://cloud.vazyme.com:83/" target="blank">
              <img src="@/assets/img/cloud.png" />
            </a>
            <a class="cloud lan">
              <img src="@/assets/img/lan.png" />
            </a>
          </slot>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {};
  },
  props: {
    pathway: {
      type: Array,
      required: false,
      default: [
        { title: "首页", route: "" },
        { title: "首页", route: "" },
        { title: "首页", route: "" },
        { title: "首页", route: "" },
      ],
    },
  },
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
  background-color: var(--white);
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
  padding-top: 2px;
}
.logo {
  margin-top: 8px;
}

.topbar .logo img {
  height: 46px;
}

.topbar .title {
  margin: 0px 30px;
  padding: 22px 0px;
  transition: all 0.1s linear 0s;
}
.topbar .title::after {
  position: absolute;
  bottom: 0;
  left: 0;
  content: "";
  width: 100%;
  height: 3px;
  background-color: #04429a;
  transform: scaleX(0);
  transition: all 0.4s ease;
}
.topbar .title:hover {
  color: #04429a;
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