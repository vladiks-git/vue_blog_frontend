<template>
  <div id="app">
    <nav-bar></nav-bar>
    <router-view></router-view>
  </div>
</template>

<script>

import NavBar from "./components/nav-bar";
export default {
  components: {
    NavBar
  }
}
</script>

<style>

</style>
