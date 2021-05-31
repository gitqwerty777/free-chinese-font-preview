<template>
  <div id="app">
    <h1 class="title is-1">免費中文字型一覽</h1>
    <FontPreviews />
  </div>
</template>

<script>
import FontPreviews from "./components/FontPreviews.vue";

export default {
  name: "App",
  components: {
    FontPreviews,
  },
};
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-left: 200px;
  margin-right: 200px;
}
</style>
