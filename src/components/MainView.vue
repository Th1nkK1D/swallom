<template lang="html">
  <div class="layer-wrapper">
    <div class="map-layer">
      <gmap-map ref="mainmap"
        :center="position"
        :zoom="zoom"
        :options="mapOptions"
        map-type-id="terrain"
        style="width: 100vw; height: 92vh"
      >
        <gmap-marker :position="position" icon="/static/img/streetview-icon.png"></gmap-marker>
        <gmap-circle :center="position" :radius="radius" options:="circleOptions"></gmap-circle>
      </gmap-map>
    </div>
    <div class="control-layer">
      <v-layout column class="bottom-con">
        <v-flex>
          <v-slider v-model="radius" :hint="'radius: '+radius+'m'" :persistent-hint="true" min="200" max="2000" ></v-slider>
        </v-flex>
        <v-flex>
          <v-btn round primary dark block class="rand-btn" @click="random">Random</v-btn>
        </v-flex>
      </v-layout>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      position: {lat: 0.0, lng: 0.0},
      radius: 800,
      type: ['restaurant'],
      mapOptions: {
        zoomControl: false,
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
    },
    zoom: function() {
      return 15 - Math.round((this.radius-800)*0.002);
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
  .layer-wrapper {
    position: relative;
  }

  .map-layer {
    position: absolute;
    height: 92vh;
  }

  .control-layer {
    position: relative;
    width: 100vw;
    height: 92vh;
  }

  .bottom-con {
    position: absolute;
    bottom: 0;
    width: 100vw;
    padding: 5vw;
  }
</style>
