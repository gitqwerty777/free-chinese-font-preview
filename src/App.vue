<template>
  <div id="app">
    <b-navbar type="is-success">
      <template #brand>
        <b-navbar-item> 免費繁體中文字型一覽 </b-navbar-item>
      </template>
      <template #start>
        <b-navbar-item href="#"> 關於 </b-navbar-item>
      </template>

      <template #end> </template>
    </b-navbar>
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
