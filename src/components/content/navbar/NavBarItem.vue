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
            <a>
              <img src="@/assets/img/help_blur.png" />
            </a>
            <a href="http://cloud.vazyme.com:83/" target="blank">
              <img src="@/assets/img/cloud_blur.png" />
            </a>
            <a
              @click="alert_message('你被骗啦,这个工具还没有英文版的哦~')"
            >
              <img src="@/assets/img/lan_blur.png" />
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
      required: true,
      default: [
        { title: "首页", route: "" },
        { title: "首页", route: "" },
        { title: "首页", route: "" },
        { title: "首页", route: "" },
      ],
    },
  },
  methods: {
    alert_message(aaa) {
      alert(aaa);
    },
  },
};
</script>

<style lang="css" scoped>
.router-link-active {
  display: inline-block;
  color: var(--actived);
}
.topbar .banner .router-link-active::after {
  transform: scaleX(1);
}
.topbar {
  background-color: var(--white);
  color: var(--deactived);
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
  padding-top: 2px;
}

/* logo部分 */
.logo {
  margin-top: 8px;
}

.topbar .logo img {
  height: 46px;
  /* filter: grayscale(100%);
  opacity: 0.66;
  transition: .3s ease all; */
}
/* .topbar .logo img:hover{
  filter: grayscale(0%);
  opacity: 1;
} */
/* title部分 */
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
  background-color: var(--actived);
  transform: scaleX(0);
  transition: all 0.4s ease;
}
.topbar .title:hover {
  color: var(--actived);
}
.topbar .title:hover::after {
  transform: scaleX(1);
}

.topbar .banner {
  display: flex;
  justify-content: space-evenly;
}
/* 右边图标部分 */
.clogo {
  display: inline-block;
  width: 200px;
  margin-top: 14px;
  color: var(--deactived);
  cursor: pointer;
}

.clogo a {
  display: inline-block;
  line-height: 25px;
  margin: 0px 8px;
}

.clogo img {
  width: 29px;
  height: 29px;
  filter: grayscale(100%);
    opacity: 0.66;
}
.clogo img:hover{
  filter: none;
  opacity: 1;
}
</style>