<template>
  <div class="font-previews">
    <section class="input-field">
      <b-field grouped group-multiline>
        //TODO: NAVBAR
        <b-field label="預覽文字">
          <b-input v-model="previewText"></b-input>
        </b-field>
        <b-field label="字體大小" expanded>
          <b-slider
            v-model="fontSize"
            size="is-medium"
            :value="20"
            :min="12"
            :max="100"
          >
          </b-slider>
        </b-field>
        <b-field label="類別">
          <b-select placeholder="選擇類別" v-model="selectedCategory">
            <option v-for="c in categories" :value="c" :key="c">
              {{ c }}
            </option>
          </b-select>
        </b-field>
      </b-field>
    </section>
    <FontPreview
      v-for="item in selectedItems"
      :key="item.message"
      :text="previewText"
      :fontsize="fontSize"
      :fontfamilyname="item.fontFamilyName"
      :fontname="item.fontname"
      :description="item.description"
      :category="item.category"
      :link="item.link"
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
  computed: {
    selectedItems: function () {
      return this.items.filter(
        (x) =>
          x.category == this.selectedCategory || this.selectedCategory == ""
      );
    },
  },
  data: function () {
    return {
      previewText: "測試文字",
      fontSize: 36,
      categories: ["明體", "宋體", "黑體", "圓體", "楷體", "其他"],
      selectedCategory: "",
      items: [
        {
          fontname: "新細明體",
          description: "明體d",
          category: "明體",
          fontFamilyName: "新細明體",
          link: "http://www.google.com",
        },
        {
          fontname: "標楷體",
          description: "宋體D",
          category: "楷體",
          fontFamilyName: "標楷體",
          link: "http://www.yahoo.com",
        },
        {
          fontname: "思源黑體",
          description: "宋體D",
          category: "黑體",
          fontFamilyName: "Noto Sans TC",
          link: "http://www.yahoo.com",
        },
        {
          fontname: "台北黑體",
          description: "宋體D",
          category: "黑體",
          fontFamilyName: "TaipeiSansTC",
          link: "https://sites.google.com/view/jtfoundry/",
        },
        {
          fontname: "粉圓體",
          description: "宋體D",
          category: "圓體",
          link: "http://www.yahoo.com",
        },
        {
          fontname: "思源宋體",
          description: "宋體D",
          category: "宋體",
          link: "http://www.yahoo.com",
        },
        {
          fontname: "全字庫正宋體",
          description: "宋體D",
          category: "宋體",
          link: "http://www.yahoo.com",
        },
        {
          fontname: "全字庫正楷體",
          description: "宋體D",
          category: "楷體",
          link: "http://www.yahoo.com",
        },
        {
          fontname: "花園明朝體",
          description: "宋體D",
          category: "明體",
          link: "http://www.yahoo.com",
        },
        {
          fontname: "瀨戶字體",
          description: "宋體D",
          category: "其他",
          link: "http://www.yahoo.com",
        },
        {
          fontname: "內海字體",
          description: "宋體D",
          category: "其他",
          link: "http://www.yahoo.com",
        },
        {
          fontname: "togalite トガリテ",
          description: "宋體D",
          category: "其他",
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
.input-field {
  height: 100px;
}
</style>
