<template>
  <div :style="{ fontFamily: fontname }" class="font-preview">
    <b-message
      title="Default"
      aria-close-label="Close message"
      closable="false"
    >
      <template #header>
        {{ fontname }} <b-tag>{{ category }}</b-tag>
      </template>
      <h2 :style="{ fontSize: fontsize + 'px' }">{{ text }}</h2>
      <b-button type="is-primary" @click="openLink">連結</b-button>
      <b-button type="is-primary" @click="openDescription">簡介</b-button>
      <!--<b-button type="is-primary" @click="download">下載</b-button>-->
    </b-message>
    //TODO: font weight
    <b-modal v-model="isDescriptionActive" :width="640" scroll="keep">
      <div class="content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
        iaculis mauris. <a>@bulmaio</a>. <a>#css</a> <a>#responsive</a>
        <br />
        <small>11:09 PM - 1 Jan 2016</small>
      </div>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "FontPreview",
  props: {
    text: String,
    fontname: String,
    fontsize: Number,
    description: String,
    category: String,
    link: String,
  },
  methods: {
    openLink() {
      window.open(this.data.link, "_blank");
      this.$buefy.notification.open("Clicked!!");
    },
    openDescription() {
      //this.$buefy.notification.open("Clicked!!");
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
}
</style>