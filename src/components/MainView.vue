<template lang="html">
  <div>
    <gmap-map ref="mainmap"
      :center="position"
      :zoom="zoom"
      :options="mapOptions"
      map-type-id="terrain"
      style="width: 100%; height: 500px"
    >
      <gmap-marker :position="position" icon="/static/img/streetview-icon.png"></gmap-marker>
      <gmap-circle :center="position" :radius="radius" options:="circleOptions"></gmap-circle>
    </gmap-map>
    <v-btn round primary dark @click="random">Random</v-btn>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      position: {lat: 0.0, lng: 0.0},
      zoom: 15,
      radius: 800,
      type: ['restaurant'],
      mapOptions: {
        zoomControl: true,
        mapTypeControl: false,
        scaleControl: true,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: false,
      },
      cicleOptions: {
        strokeColor: '#FF0000',
        strokeOpacity: 0.6,
        strokeWeight: 1,
        fillColor: '#FF0000',
        fillOpacity: 0.2,
      },
    }
  },
  computed: {
    resultList: function() {
      return this.$store.state.resultList;
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

          // store
          vm.$store.commit('updateResult',results);

          // route
          vm.$router.push('/result/'+vm.position.lat+'/'+vm.position.lng+'/'+vm.zoom+'/');
        }
      });
    }
  }
}

</script>

<style lang="css">
</style>
