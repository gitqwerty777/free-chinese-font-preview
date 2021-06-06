<template>
  <div
    :style="{ fontFamily: fontfamilyname, fontWeight: fontweight }"
    class="font-preview"
  >
    <b-message
      title="Default"
      aria-close-label="Close message"
      :closable="false"
    >
      <template #header>
        <span class="title">{{ fontname }} </span>
        <b-tag size="is-large">{{ category }}</b-tag>
        <b-tooltip position="is-top" label="開啟相關連結" class="tooltip">
          <b-button type="is-primary" @click="openLink" class="btn"
            >連結</b-button
          >
        </b-tooltip>
        <b-tooltip
          position="is-right"
          :label="description"
          class="tooltip"
          multilined
        >
          <b-button type="is-primary" @click="openDescription" class="btn"
            >簡介</b-button
          >
        </b-tooltip>
      </template>
      <span :style="{ fontSize: fontsize + 'px' }">{{ text }}</span>
      <!--<b-button type="is-primary" @click="download">下載</b-button>-->
    </b-message>
  </div>
</template>

<script>
export default {
  name: "FontPreview",
  props: {
    text: String,
    fontname: String,
    fontweight: Number,
    fontfamilyname: String,
    fontsize: Number,
    description: String,
    category: String,
    link: String,
  },
  methods: {
    openLink() {
      window.open(this.link, "_blank");
      this.$buefy.notification.open("Clicked!!");
    },
    openDescription() {
      //this.$buefy.notification.open("Clicked!!");
      this.isDescriptionActive = true;
    },
    download() {
      this.$buefy.notification.open("download!!");
    },
  },
  data: function () {
    return {
      isDescriptionActive: false,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.font-preview {
  text-align: left;
  margin: 5px 5px 5px 5px;
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
  src: url(../assets/TW-Kai-98_1.ttf) format("truetype"); /* 預覽失敗 */
}
@font-face {
  font-family: "TWSung";
  font-style: normal;
  font-weight: 500;
  src: url(../assets/TW-Sung-98_1.ttf) format("truetype"); /* 預覽失敗 */
}
@font-face {
  font-family: "Hanamin";
  font-style: normal;
  font-weight: 500;
  src: url(../assets/HanaMinA.ttf) format("truetype");
}

@import url("https://fonts.googleapis.com/css2?family=Noto+Serif+TC:wght@200;300;400;500;600;700;900&display=swap");

.title {
  font-size: 50px;
  color: white;
}
.btn {
  margin: 10px 5px 5px 10px;
  display: flex;
}
</style>