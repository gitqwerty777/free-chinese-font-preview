<template>
  <div id="app">
    <FontPreviews id="content" />
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
#content {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
  margin-left: 200px;
  margin-right: 200px;
}
</style>
