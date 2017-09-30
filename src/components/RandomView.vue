<template lang="html">
  <div>
    <gmap-map ref="resultmap"
      :center="resultList[randi].geometry.location"
      :zoom="zoom"
      :options="options"
      map-type-id="terrain"
      style="width: 100%; height: 200px"
    >
      <gmap-marker :position="resultList[randi].geometry.location"></gmap-marker>
      <gmap-marker :position="position" icon="/static/img/streetview-icon.png"></gmap-marker>
    </gmap-map>
    <!-- <div v-if="resultList.length > 0">
      {{resultList[randi].name}}
    </div> -->
    {{ resultList[randi].name }}
    <button type="button" name="button" @click="random">Rerandom</button>
    <router-link :to="{ name: 'MainView'}" tag="button">Back</router-link>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      position: {lat: 0.0, lng: 0.0},
      zoom: 15,
      randi: 0,
      options: {
        zoomControl: false,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: false,
      }
    }
  },
  computed: {
    resultList: function() {
      return this.$store.state.resultList;
    },
  },
  mounted: function() {
    //Init data
    this.position = {lat: Number(this.$route.params.lat), lng: Number(this.$route.params.lng)};
    this.zoom = Number(this.$route.params.zoom);

    this.random();
  },
  methods: {
    random: function() {
      this.randi = Math.floor(Math.random() * this.resultList.length);
    }
  }
}

</script>

<style lang="css">
</style>
