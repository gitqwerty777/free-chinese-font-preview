<template>
  <div class="font-previews">
    <b-navbar type="is-success" fixed-top>
      <template #brand>
        <b-navbar-item> 免費繁體中文字型一覽 </b-navbar-item>
      </template>
      <template #start>
        <b-navbar-item href="#"> 關於 </b-navbar-item>
        <!-- TODO: 實作關於頁面 -->
        <section class="input-field">
          <b-field grouped group-multiline>
            <b-field label="預覽文字" expanded>
              <b-input v-model="previewText"></b-input>
            </b-field>
            <b-field label="類別" expanded>
              <b-select placeholder="選擇類別" v-model="selectedCategory">
                <option v-for="c in categories" :value="c" :key="c">
                  {{ c }}
                </option>
              </b-select>
            </b-field>
            <b-field label="字重" expanded>
              <b-slider
                v-model="fontWeight"
                size="is-medium"
                step="100"
                :min="100"
                :max="1000"
                ticks
              >
              </b-slider>
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
          </b-field>
        </section>
      </template>

      <template #end> </template>
    </b-navbar>

    <div class="font-previews">
      <FontPreview
        class="font-preview"
        v-for="item in selectedItems"
        :key="item.message"
        :text="previewText"
        :fontsize="fontSize"
        :fontweight="fontWeight"
        :fontfamilyname="item.fontFamilyName"
        :fontname="item.fontname"
        :description="item.description"
        :category="item.category"
        :link="item.link"
      >
      </FontPreview>
    </div>
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
      fontWeight: 500,
      categories: ["明體", "宋體", "黑體", "圓體", "楷體", "其他"],
      selectedCategory: "",
      items: [
        {
          fontname: "新細明體",
          description:
            "細明體和新細明體是Microsoft Windows中文版內附的中文字型，由威鋒數位模仿本蘭明朝體而製作，故又常稱「華康細明體」。",
          category: "明體",
          fontFamilyName: "新細明體",
          link: "https://www.dynacw.com.tw/news/news_detail.aspx?s=39",
        },
        {
          fontname: "標楷體",
          description:
            "標楷體是微軟Windows作業系統所內建的TrueType中文字型，從Windows NT 3.51及Windows 95開始跟隨繁體中文版的Windows安裝。本字型由華康數位開發",
          category: "楷體",
          fontFamilyName: "標楷體",
          link: "https://www.dynacw.com.tw/news/news_detail.aspx?s=39",
        },
        {
          fontname: "思源黑體",
          description:
            "思源黑體是Adobe與Google所領導開發的開源字型家族，於2014年7月16日首次發布，支援繁體中文、簡體中文、日文及韓文，並且各有7種字體粗細。",
          category: "黑體",
          fontFamilyName: "Noto Sans TC",
          link: "https://github.com/adobe-fonts/source-han-sans",
        },
        {
          fontname: "台北黑體",
          description:
            "時下免費的繁體中文字型大多符合台灣及香港的教育部門標準，不盡然（或根本不）適合印刷。印刷風格的字型大多為版權字型，使用者必須付費取得。有鑑於此，翰字鑄造規劃以開源的思源黑體（Source Han Sans）為基礎進行改作。改作而成的字型以繁體中文世界的其中一個核心都市為名：台北黑體",
          category: "黑體",
          fontFamilyName: "TaipeiSansTC",
          link: "https://sites.google.com/view/jtfoundry/",
        },
        {
          fontname: "粉圓體",
          description:
            "Open 粉圓，「粉圓」一詞源於珍珠奶茶，是台灣字體公司 justfont 基於日本 MOTOYA 的小杉圓體製作的一套圓體字型",
          category: "圓體",
          fontFamilyName: "huninn",
          link: "https://justfont.com/huninn/",
        },
        {
          fontname: "思源宋體",
          description:
            "思源宋體是 Adobe Type 推出的最新泛 CJK 字體，也是思源黑體的有襯線對應字體",
          category: "宋體",
          fontFamilyName: "Noto Serif TC",
          link: "https://source.typekit.com/source-han-serif/tw/",
        },
        {
          fontname: "花園明朝體",
          description:
            "花園字體（日語：花園フォント）為日本字形維基組織開發的一款開源漢字字型",
          category: "明體",
          fontFamilyName: "Hanamin",
          link: "http://fonts.jp/hanazono/",
        },
        {
          fontname: "全字庫正宋體(無預覽)",
          description: "全字庫正宋體",
          category: "宋體",
          fontFamilyName: "TWKai",
          link: "https://data.gov.tw/dataset/5961",
        },
        {
          fontname: "全字庫正楷體(無預覽)",
          description: "全字庫正楷體",
          category: "楷體",
          fontFamilyName: "TWSung",
          link: "https://data.gov.tw/dataset/5961",
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
  /*position: fixed;*/
  /*top: 100px;*/
  height: 100px;
  width: 99%;
  /*z-index: 10;
  background-color: green;*/
}
.font-previews {
  margin-top: 150px;
}
</style>
