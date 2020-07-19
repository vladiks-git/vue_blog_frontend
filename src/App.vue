<template>
  <div id="app">
    <top-nav-bar></top-nav-bar>
    <nav-bar></nav-bar>
    <router-view></router-view>
  </div>
</template>

<script>

import NavBar from "./components/nav-bar";
import TopNavBar from "./components/top-nav-bar";
export default {
  components: {
    TopNavBar,
    NavBar
  }
}
</script>

<style>

</style>
