<template>
  <div ref="map" id="map"></div>
</template>

<script>
import { onMounted, ref } from "vue";
import * as L from "leaflet";
import "leaflet/dist/leaflet.css";

export default {
  props: ["location"],
  setup(props) {
    const map = ref(null);

    const displayMap = async () => {
      const [lat, lng] = props.location.coordinates;

      map.value = L.map("map").setView([lat, lng], 13);

      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(map.value);

      L.marker([lat, lng], { title: `${props.location.description}` }).addTo(
        map.value
      );
    };

    onMounted(displayMap);

    return { map };
  },
};
</script>

<style></style>
