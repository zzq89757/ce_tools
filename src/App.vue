<template>
  <div id="app">
    <NavBar></NavBar>
    <router-view />
  </div>
</template>

<script>

import NavBar from "@/components/content/navbar/NavBar.vue";

import Vue from "vue";
Vue.directive("LimitInputBase", {
  bind(el) {
    el.oninput = () => {
      el.value = el.value.toUpperCase().replace(/[^AGCT]+/g, "");
      console.log("%c" + el.value, "color:green");
    };
  }
});
Vue.directive("LimitInputBasen", {
  bind(el) {
    el.oninput = () => {
      console.log("%c" + typeof el.value, "color:blue");
      el.value = el.value.toUpperCase().replace(/[^AGCT\n]+/g, "");
      console.log("%c" + el.value, "color:green");
    };
  }
});
export default {
  name: "App",
  components: { NavBar }
};
</script>

<style>

@import 'assets/css/base.css';

</style>
