<!-- eslint-disable no-new -->
<script setup lang="ts">
import { Loader } from '@googlemaps/js-api-loader'

const loader = new Loader({
  apiKey: 'AIzaSyDIfUVcub6RqXsutLIVam2Q9mEP3BML_KA',
  version: 'weekly',
})

const mapOptions = {
  center: { lat: 49.28869, lng: 9.27136 },
  zoom: 17,
}

const mapRef = ref<HTMLDivElement | null>(null)

loader.load().then(() => {
  if (mapRef !== null) {
    const map = new google.maps.Map(mapRef.value!, mapOptions)
    new google.maps.Marker({
      position: mapOptions.center,
      map,
    })
  }
})
</script>

<template>
  <div ref="mapRef" />
</template>
