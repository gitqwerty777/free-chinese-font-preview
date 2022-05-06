<template>
  <div class="font-previews">
    <b-navbar type="is-success" fixed-top>
      <template #brand>
        <b-navbar-item
          tag="router-link"
          :to="{ path: '/' }"
          style="font-size: 2em"
          >免費繁體中文字型一覽</b-navbar-item
        >
      </template>
      <template #start>
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
            <!--TODO: 字重長度 -->
            <b-field label="字重" expanded style="min-width: 200px">
              <b-slider
                v-model="fontWeight"
                size="is-medium"
                :step="100"
                :min="100"
                :max="900"
                ticks
              >
              </b-slider>
            </b-field>
            <b-field label="字體大小" expanded style="min-width: 150px">
              <b-slider
                v-model="fontSize"
                size="is-medium"
                :min="12"
                :max="100"
              >
              </b-slider>
            </b-field>
          </b-field>
        </section>
        <b-navbar-item tag="router-link" :to="{ path: '/about' }">
          關於
        </b-navbar-item>
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
      return this.items
        .filter(
          (x) =>
            x.category == this.selectedCategory ||
            this.selectedCategory == "全部"
        )
        .sort(function (a, b) {
          return a.category > b.category ? -1 : 1;
        });
    },
  },
  data: function () {
    return {
      previewText: "南去經三國，東來過五湖",
      fontSize: 36,
      fontWeight: 500,
      categories: ["全部", "明體", "宋體", "黑體", "圓體", "楷體", "其他"],
      selectedCategory: "全部",
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
            "翰字鑄造規劃以開源的思源黑體（Source Han Sans）為基礎進行改作。改作而成的字型以繁體中文世界的其中一個核心都市為名：台北黑體",
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
          //註：使用 http://ecomfe.github.io/fontmin/tw 壓縮字體至常用4808字
          fontname: "全字庫正宋體",
          description: "CNS11643中文標準交換碼全字庫(簡稱全字庫)",
          category: "宋體",
          fontFamilyName: "TWSung",
          link: "https://data.gov.tw/dataset/5961",
        },
        {
          //註：使用 http://ecomfe.github.io/fontmin/tw 壓縮字體至常用4808字
          fontname: "全字庫正楷體",
          description: "CNS11643中文標準交換碼全字庫(簡稱全字庫)",
          category: "楷體",
          fontFamilyName: "TWKai",
          link: "https://data.gov.tw/dataset/5961",
        },
        /*{
          fontname: "超威德鑫9pt小篆",
          description: "",
          category: "其他",
          fontFamilyName: "SuperDexin",
          link: "https://github.com/SuperDexin/9pt-Zhuan",
        },*/
        {
          fontname: "芫荽",
          description:
            "Fontworks 的 Klee（クレー）字型原本內建於 macOS，因其兼具楷體筆調、又似仿宋整齊端正，具高易讀性與溫暖外形，廣受中文使用者喜好。然而畢竟是日文字型，雖然字數不少，但排中文時仍有一定程度缺字，一直是可惜之處。但 2020 年底，Fontworks 忽然以開源授權釋出了 Klee One 字型，震驚字型圈。網路上已有許多其他專案嘗試為 Klee One 補上中文字，如簡體中文補字的 LXGW WenKai / 霞鶩文楷 與傳統字形補字的 Klee One 繁體中文版 等。此專案「芫荽」則是嘗試儘可能調整字形貼近教育部標準字體，並補充台客語用字，貼近台灣需求，並適合學齡教育使用（如童書、國字習作等）。由於原 Klee 的 Regular 偏細而預估使用需求較低，本專案以原 SemiBold 為底製作。",
          category: "其他",
          fontFamilyName: "iansui",
          link: "https://github.com/ButTaiwan/iansui",
        },
        {
          fontname: "俐方體11號",
          description:
            "俐方體11號是基於 M⁺ gothic 12r 衍生的開源繁體中文點陣字型，可用於像素風格的遊戲以及美術當中。",
          category: "其他",
          fontFamilyName: "cubic11",
          link: "https://github.com/ACh-K/Cubic-11",
        },
        {
          fontname: "一點明體",
          description:
            "「I.明體（I.Ming）」乃係一套依照傳承字形標準化文件《傳承字形部件檢校表》的推薦字形標準",
          category: "明體",
          fontFamilyName: "IMing",
          link: "https://github.com/ichitenfont/I.Ming",
        },
        {
          fontname: "內海字體",
          description: "基於瀨戶字體的開放原始碼中文字型",
          category: "其他",
          fontFamilyName: "Naikai",
          link: "https://github.com/max32002/naikaifont",
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
  height: 90px;
  /*z-index: 10;
  background-color: green;*/
}
.font-previews {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 100px 100px 50px 100px;
}

@font-face {
  font-family: "Noto Sans TC";
  font-style: normal;
  font-weight: 100;
  src: url(//fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Thin.woff2)
      format("woff2"),
    url(//fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Thin.woff)
      format("woff"),
    url(//fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Thin.otf)
      format("opentype");
}
@font-face {
  font-family: "Noto Sans TC";
  font-style: normal;
  font-weight: 300;
  src: url(//fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Light.woff2)
      format("woff2"),
    url(//fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Light.woff)
      format("woff"),
    url(//fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Light.otf)
      format("opentype");
}
@font-face {
  font-family: "Noto Sans TC";
  font-style: normal;
  font-weight: 400;
  src: url(//fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Regular.woff2)
      format("woff2"),
    url(//fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Regular.woff)
      format("woff"),
    url(//fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Regular.otf)
      format("opentype");
}
@font-face {
  font-family: "Noto Sans TC";
  font-style: normal;
  font-weight: 500;
  src: url(//fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Medium.woff2)
      format("woff2"),
    url(//fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Medium.woff)
      format("woff"),
    url(//fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Medium.otf)
      format("opentype");
}
@font-face {
  font-family: "Noto Sans TC";
  font-style: normal;
  font-weight: 700;
  src: url(//fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Bold.woff2)
      format("woff2"),
    url(//fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Bold.woff)
      format("woff"),
    url(//fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Bold.otf)
      format("opentype");
}
@font-face {
  font-family: "Noto Sans TC";
  font-style: normal;
  font-weight: 900;
  src: url(//fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Black.woff2)
      format("woff2"),
    url(//fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Black.woff)
      format("woff"),
    url(//fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Black.otf)
      format("opentype");
}

@font-face {
  font-family: "TaipeiSansTC";
  font-style: normal;
  font-weight: 300;
  src: url(../assets/TaipeiSansTCBeta-Light.ttf) format("truetype");
}
@font-face {
  font-family: "TaipeiSansTC";
  font-style: normal;
  font-weight: 500;
  src: url(../assets/TaipeiSansTCBeta-Regular.ttf) format("truetype");
}
@font-face {
  font-family: "TaipeiSansTC";
  font-style: normal;
  font-weight: 700;
  src: url(../assets/TaipeiSansTCBeta-Bold.ttf) format("truetype");
}
@font-face {
  font-family: "huninn";
  font-style: normal;
  font-weight: 500;
  src: url(../assets/jf-openhuninn-1.1.ttf) format("truetype");
}

@font-face {
  font-family: "TWKai";
  font-style: normal;
  font-weight: 500;
  src: url(../assets/TW-Kai-98-4808.ttf) format("truetype");
}
@font-face {
  font-family: "TWSung";
  font-style: normal;
  font-weight: 500;
  src: url(../assets/TW-Sung-98-4808.ttf) format("truetype");
}
@font-face {
  font-family: "Hanamin";
  font-style: normal;
  font-weight: 500;
  src: url(../assets/HanaMinA.ttf) format("truetype"),
    url(../assets/HanaMinB.ttf) format("truetype");
}
@font-face {
  font-family: "IMing";
  font-style: normal;
  font-weight: 500;
  src: url(../assets/I.Ming-7.01.ttf) format("truetype");
}
@font-face {
  font-family: "cubic11";
  font-style: normal;
  font-weight: 500;
  src: url(../assets/Cubic_11_1.010_R.ttf) format("truetype");
}
@font-face {
  font-family: "iansui";
  font-style: normal;
  font-weight: 500;
  src: url(../assets/Iansui094.otf) format("opentype");
}
/*@font-face {
  font-family: "SuperDexin";
  font-style: normal;
  font-weight: 500;
  src: url(../assets/9pt.ttf) format("truetype");
}*/
@font-face {
  font-family: "Naikai";
  font-style: normal;
  font-weight: 500;
  src: url(../assets/NaikaiFont-Regular.ttf) format("truetype");
}

@import url("https://fonts.googleapis.com/css2?family=Noto+Serif+TC:wght@200;300;400;500;600;700;900&display=swap");
</style>
