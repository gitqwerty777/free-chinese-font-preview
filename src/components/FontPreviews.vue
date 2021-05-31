<template>
  <div class="font-previews">
    <section>
      <b-field label="預覽文字">
        <b-input v-model="previewText"></b-input>
      </b-field>
      <b-field label="字體大小">
        <b-slider v-model="fontSize" size="is-medium" :value="20"> </b-slider>
      </b-field>
    </section>
    //TODO: 顯示/移除字體
    <FontPreview
      v-for="item in items"
      :key="item.message"
      :text="previewText"
      :fontname="item.fontname"
      :fontsize="fontSize"
      :description="item.description"
      :category="item.category"
    >
    </FontPreview>
  </div>
</template>

<script>
import FontPreview from "./FontPreview.vue";

export default {
  name: "HelloWorld",
  components: {
    FontPreview,
  },
  props: {
    msg: String,
  },
  data: function () {
    return {
      previewText: "測試文字",
      fontSize: 20,
      items: [
        {
          fontname: "新細明體",
          description: "明體d",
          category: "明體",
          link: "http://www.google.com",
        },
        {
          fontname: "標楷體",
          description: "宋體D",
          category: "宋體",
          link: "http://www.yahoo.com",
        },
        //TODO: 補完
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
