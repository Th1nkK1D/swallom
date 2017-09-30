<template lang="html">
  <div>
    <gmap-map
      :center="position"
      :zoom="zoom"
      map-type-id="terrain"
      style="width: 100%; height: 300px"
    ></gmap-map>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      position: {lat: 0.0, lng: 0.0},
      zoom: 15
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
  }
}

</script>

<style lang="css">
</style>
