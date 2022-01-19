<template>
  <div id="app">
    <NavBar></NavBar>
    <router-view />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Vue from "vue";
Vue.directive("LimitInputBase", {
  bind(el) {
    el.oninput = () => {
      // el.value = el.value.toUpperCase().match(/[AGCT]+/g);
      el.value = el.value.toUpperCase().replace(/[^AGCT\n]+/g, "");
      console.log("%c" + el.value, "color:red");
    };
  }
});
Vue.directive("LimitInputBasen", {
  bind(el) {
    el.oninput = () => {
      console.log("%c" + typeof el.value, "color:red");
      el.value = el.value.toUpperCase().replace(/[^AGCT\n]+/g, "");
      console.log("%c" + el.value, "color:red");
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
