<template>
  <!-- 註：Buefy預設h1~h6是正常大小...-->
  <div id="about">
    <h3 class="title is-3 is-spaced">聲明</h3>
    本網頁僅供比較和參考， 請從作者的原始網站下載字型。<br /><br />

    <h3 class="title is-3 is-spaced">如何比較</h3>
    可參考<a
      target="_blank"
      href="https://blog.justfont.com/2014/12/jfbook-example/"
      >此文章</a
    ><br /><br />

    <h3 class="title is-3 is-spaced">怎麼沒有□□字型？</h3>
    如果有<b>免費</b>且支援<b>繁體中文</b>的字型，歡迎提出<a
      href="https://github.com/gitqwerty777/free-chinese-font-preview/issues"
      target="_blank"
      >Issue</a
    >或<a
      href="https://github.com/gitqwerty777/free-chinese-font-preview/pulls"
      target="_blank"
      >Pull Request</a
    ><br /><br />

    <h3 class="title is-3 is-spaced">關於網頁作者</h3>

    <Icon icon="bi:github" />
    <a href="https://github.com/gitqwerty777" target="_blank">Github</a><br />
    <Icon icon="bxs:user-pin" />
    <i class="far fa-user"></i>
    <a href="http://qwerty777.me/" target="_blank">主頁</a><br /><br />

    <h4 class="title is-5 is-spaced">Powered by <Icon icon="logos:vue" /></h4>
    <Icon icon="bi:github" />
    <a
      href="https://github.com/gitqwerty777/free-chinese-font-preview"
      target="_blank"
      >Fork Me on Github</a
    ><br /><br />
    <b-button type="is-primary" tag="router-link" to="/">回首頁</b-button>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue2";

export default {
  name: "About",
  components: { Icon },
};
</script>

<style scoped>
#about {
  background-color: #b38900;
  text-align: center;
  padding: 50px;
  height: calc(100vh);
  width: 100vw;
}
</style>