<template lang="html">
  <v-layout column class="max-view" v-if="randi != -1">
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

    <v-layout column class="text" v-if="resultList.length > 1">
      <img v-if="resultList[randi].photos && resultList[randi].photos[0]" class="place-img" :src="resultList[randi].photos[0].getUrl({'maxWidth': 256, 'maxHeight': 256})" alt="">
      <h3 class="teal--text lighten-2">{{resultList[randi].name}}</h3>
      <star-rating class="start-rating" :rating="resultList[randi].rating" :read-only="true" :star-size="20" :show-rating="false"></star-rating>
      <h5>{{resultList[randi].vicinity}}</h5>
    </v-layout>

    <v-layout column class="text" v-else>
      <h1 class="teal--text lighten-2">; - ;</h1>
      <h3 class="teal--text lighten-2">Nothing left to eat</h3>
    </v-layout>

    <v-layout column class="btn-container">
      <v-btn round primary dark @click="random" class="pink lighten-2">Re-random</v-btn>
      <v-btn round dark @click="back" class="blue-grey lighten-1">Back</v-btn>
    </v-layout>

  </v-layout>
</template>

<script>
export default {
  data: function() {
    return {
      position: {lat: 0.0, lng: 0.0},
      zoom: 15,
      randi: -1,
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
      if(this.randi > 0) {
        //remove old random
        this.resultList.splice(this.randi,1);
        this.$store.commit('updateResult',this.resultList);
      }

      this.randi = Math.floor(Math.random() * this.resultList.length);
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
    padding-top: 10vw;
    padding-bottom: 0;
    position: relative;
    font-size: 4vw;
  }
  .btn-container {
    justify-content: flex-end;
    padding: 5vw;
    padding-top: 10px;
  }
  .place-img {
    position: absolute;
    top: -10vh;
    left: calc(50vw - 7.5vh);
    width: 15vh;
    height: 15vh;
    border-radius: 50%;
    object-fit: cover;
    margin: auto;
    border: 4px solid white;
  }
  h3 {
    margin: 5px;
    line-height: 100%;
    font-size: 8vw;
  }
  h5 {
    margin-top: 10px;
    line-height: 150%;
    font-size: 4vw;
  }
  .start-rating {
    margin: 5px auto;
  }
</style>
