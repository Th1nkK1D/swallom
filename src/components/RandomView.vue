<template lang="html">
  <v-layout column class="max-view">
    <gmap-map ref="resultmap"
      :center="resultList[randi].geometry.location"
      :zoom="zoom"
      :options="mapOptions"
      map-type-id="terrain"
      style="width: 100vw; height: 30vh"
    >
      <gmap-marker :position="resultList[randi].geometry.location"></gmap-marker>
      <gmap-marker :position="position" icon="/static/img/streetview-icon.png"></gmap-marker>
    </gmap-map>
    <v-layout column class="text" v-if="resultList.length > 0">
      <img class="place-img" :src="resultList[randi].photos[0].getUrl({'maxWidth': 256, 'maxHeight': 256})" alt="">
      <h2>{{resultList[randi].name}}</h2>
      <h5>{{resultList[randi].vicinity}}</h5>
    </v-layout>

    <v-layout column class="btn-container">
      <v-btn round primary dark @click="random">Rerandom</v-btn>
      <v-btn round dark @click="back">Back</v-btn>
    </v-layout>

  </v-layout>
</template>

<script>
export default {
  data: function() {
    return {
      position: {lat: 0.0, lng: 0.0},
      zoom: 15,
      randi: 0,
      mapOptions: {
        zoomControl: true,
        mapTypeControl: false,
        scaleControl: true,
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
      console.log(this.resultList[this.randi])
    },
    back: function() {
      this.$router.push('/');
    }
  }
}

</script>

<style lang="css">
  .max-view {
    height: 92vh;
  }
  .text {
    padding: 5vw;
    padding-bottom: 0;
  }
  .btn-container {
    /*height: 40vh;*/
    justify-content: flex-end;
    padding: 5vw;
  }
  .place-img {
    width: 15vh;
    height: 15vh;
    border-radius: 50%;
    object-fit: cover;
    margin: auto;
  }
</style>
