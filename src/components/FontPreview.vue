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
        <b-tag type="is-success" size="is-large">{{ category }}</b-tag>
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
          <b-button type="is-info" @click="openDescription" class="btn"
            >簡介</b-button
          >
        </b-tooltip>
      </template>
      <span :style="{ fontSize: fontsize + 'px' }">{{ text }}</span>
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
    },
    openDescription() {
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

.title {
  font-size: 50px;
  color: white;
}
.btn {
  margin: 10px 5px 5px 10px;
  display: flex;
}
</style>