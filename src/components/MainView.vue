<template lang="html">
  <div>
    <gmap-map ref="mainmap"
      :center="position"
      :zoom="zoom"
      map-type-id="terrain"
      style="width: 100%; height: 500px"
    >
    <gmap-marker :position="position"></gmap-marker></gmap-map>
    <router-link :to="{ name: 'RandomView', params: { lat: position.lat,lng: position.lng,zoom: zoom ,radius: radius,type: type.toString()}}">User</router-link>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      position: {lat: 0.0, lng: 0.0},
      zoom: 15,
      radius: '500',
      type: ['restaurant']
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
}

</script>

<style lang="css">
</style>
