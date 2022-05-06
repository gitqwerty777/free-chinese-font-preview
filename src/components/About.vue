<template>
  <div>
    <div id="about">{{ markdown }}</div>
    <router-link to="/">回首頁</router-link>
  </div>
</template>

<script>
export default {
  name: "About",
  data: function () {
    return {
      anchorAttributes: {
        target: "_blank",
        rel: "noopener noreferrer nofollow",
      },
      markdown: `
## 聲明
本網頁僅供比較和參考，
請從作者的原始網站下載字型。
## 關於作者
- <i class="fab fa-github"></i> [Github](https://github.com/gitqwerty777)
- <i class="far fa-user"></i> [主頁](http://qwerty777.me/)
#### Powered by <i class="fab fa-vuejs"></i>
`,
    };
  },
};
</script>

<style scoped>
#about {
  grid-area: c;
  background-color: #b38900;
  text-align: left;
  padding: 50px;
  height: calc(100vh - 60px);
  width: 100vw;
}
</style>