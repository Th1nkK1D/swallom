<template lang="html">
  <div>
    <gmap-map ref="mainmap"
      :center="position"
      :zoom="zoom"
      map-type-id="terrain"
      style="width: 100%; height: 500px"
    >
    <gmap-marker :position="position"></gmap-marker></gmap-map>
    <button type="button" name="button" @click="random">random</button>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      position: {lat: 0.0, lng: 0.0},
      zoom: 15,
      radius: 500,
      type: ['restaurant'],
      resultList: resultList
    }
  },
  mounted: function() {
    var vm = this;

    // Get device location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        vm.position = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
      }, function() {
        console.log("Location Error")
      });
    } else {
      console.log("Browser doesn't support Geolocation");
    }
  },
  methods: {
    random : function() {
      console.log("rand");
      //Init place service
      var request = {
        location: this.position,
        radius: this.radius,
        type: this.type
      };

      let service = new google.maps.places.PlacesService(this.$refs.mainmap.$mapObject);

      var vm = this;

      //Get place list
      service.nearbySearch(request, function(results, status) {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
          console.log(results);
          vm.resultList = results;
          vm.randi = Math.floor(Math.random() * results.length);
          console.log(vm.resultList[vm.randi])
        }
      });
    }
  }
}

</script>

<style lang="css">
</style>
