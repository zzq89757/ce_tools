<template>
  <div id="app">
    <keep-alive> <NavBar></NavBar></keep-alive>
    <keep-alive><router-view /></keep-alive>
  </div>
</template>

<script>
import NavBar from "@/components/content/navbar/NavBar";

import Vue from "vue";
Vue.directive("limit", {
  bind(el, binding) {
    el.oninput = () => {
      el.value =
        binding.arg === 1
          ? el.value.toUpperCase().replace(/[^AGCT\n]+/g, "")
          : el.value.toUpperCase().replace(/[^AGCT]+/g, "");
      console.log("%c" + el.value, "color:green");
    };
  },
});
export default {
  name: "App",
  components: { NavBar },
};
</script>

<style>
@import "assets/css/base.css";

</style>
