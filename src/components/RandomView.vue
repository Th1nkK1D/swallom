<template lang="html">
  <div>
    <gmap-map ref="resultmap"
      :center="position"
      :zoom="zoom"
      map-type-id="terrain"
      style="width: 100%; height: 200px"
    >
    <!-- <gmap-marker :position="position"></gmap-marker>-->
    </gmap-map>
    <div v-if="resultList.length > 0">
      {{resultList[randi].name}}
    </div>
    <button @click="random">test</button>
  </div>
</template>

<script>
export default {
  //props: ['lat','lng','zoom','radius','type'],
  data: function() {
    return {
      position: {lat: 0.0, lng: 0.0},
      zoom: 15,
      //resultList: [],
      randi: 0,
    }
  },
  mounted: function() {
    //Init data
    console.log(this.$route.params);

    this.position = {lat: Number(this.$route.params.lat), lng: Number(this.$route.params.lng)};
    this.zoom = Number(this.$route.params.zoom);

    var request = {
      location: this.position,
      radius: Number(this.$route.params),
      type: this.$route.params.type.split(",")
    };

    //Init place service
    // console.log(this.$refs.resultmap);
    // console.log(this.$refs.resultmap.$mapObject);
    // let service = new google.maps.places.PlacesService(this.$refs.resultmap.$mapObject);
    //
    // var vm = this;
    //
    // //Get place list
    // service.nearbySearch(request, function(results, status) {
    //   if (status == google.maps.places.PlacesServiceStatus.OK) {
    //     console.log(results);
    //     vm.resultList = results;
    //     vm.randi = Math.floor(Math.random() * results.length);
    //     console.log(vm.resultList[vm.randi])
    //   }
    // });
  },
  watch: {
    $refs['resultmap']['$mapObject']: function (val) {
      console.log('watch')
      console.log(val);
    }
  },
  methods: {
    random: function() {
      console.log(this.$refs.resultmap);
      console.log(this.$refs.resultmap.$mapObject);
    }
  }
}

</script>

<style lang="css">
</style>
