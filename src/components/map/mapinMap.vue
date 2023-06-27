<script setup lang="ts">
import "leaflet/dist/leaflet.css";
// eslint-disable-next-line id-length
import L from "leaflet"
// import "leaflet.chinatmsproviders";

import {onMounted} from "vue";

onMounted(() => {
  const map = L.map('map', {zoomControl: false})
  // navigator.geolocation.getCurrentPosition(function (pos) {
  //   console.log(pos)
  //   map.setView([pos.coords.latitude, pos.coords.longitude], 20)
  // })
  // navigator.geolocation.watchPosition(success, error)
  map.setView([31.574729, 120.301663], 10)
  // map.setView([22.83883628, 113.50329857], 20)
  // leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  //   maxZoom: 15,
  //   attribution: '© OpenStreetMap'
  // }).addTo(map)

  L.tileLayer(
      "http://webrd02.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}",
      {
        maxZoom: 18,
        attribution: "© 高德地图",
      }
  ).addTo(map);


  function success(pos) {
    console.log(pos)
    const {latitude , longitude, accuracy } = pos.coords
    L.marker([latitude,longitude]).addTo(map)
    // L.circle([latitude, longitude], { radius: accuracy }).addTo(map)
  }

  function error(err) {
    console.log(err)
    // if (err.code === 1 ){
    //   alert("Please allow geolocation access")
    // } else {
    //   alert("Cannot get current location")
    // }
  }
})


</script>

<template>
  <div id="map" class="w-screen h-screen"></div>
</template>

<style scoped>

</style>