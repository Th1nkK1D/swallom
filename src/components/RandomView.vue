<template lang="html">
  <div>
    <gmap-map ref="resultmap"
      :center="position"
      :zoom="zoom"
      map-type-id="terrain"
      style="width: 100%; height: 200px"
    >
    <gmap-marker :position="resultList[randi].geometry.location"></gmap-marker>
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
