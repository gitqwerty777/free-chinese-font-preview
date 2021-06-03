<template>
  <div
    :style="{ fontFamily: fontfamilyname, fontWeight: fontweight }"
    class="font-preview"
  >
    <b-message
      title="Default"
      aria-close-label="Close message"
      closable="false"
    >
      <template #header>
        <span class="title">{{ fontname }}</span>
        <b-tag>{{ category }}</b-tag>
        <b-button type="is-primary" @click="openLink">連結</b-button>
        <b-button type="is-primary" @click="openDescription">簡介</b-button>
      </template>
      <span :style="{ fontSize: fontsize + 'px' }">{{ text }}</span>

      //TODO: 字重移到NAVBAR
      <b-field label="字重" expanded>
        <b-slider
          v-model="fontweight"
          step="100"
          :min="100"
          :max="1000"
          indicator
          ticks
        >
        </b-slider>
      </b-field>
      <!--<b-button type="is-primary" @click="download">下載</b-button>-->
    </b-message>
    <b-modal v-model="isDescriptionActive" :content="description"> </b-modal>
  </div>
</template>

<script>
export default {
  name: "FontPreview",
  props: {
    text: String,
    fontname: String,
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
      fontweight: 500,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.font-preview {
  text-align: left;
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
  font-weight: 500;
  src: url(../assets/TaipeiSansTCBeta-Regular.ttf) format("truetype");
}

.title {
  font-size: 50px;
  color: white;
}
</style>