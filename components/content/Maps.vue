<script setup lang="ts">
const center = ref({ lat: 49.28870391845703, lng: 9.270670890808105 })
const markers = reactive([
  {
    description: 'Bernd Siegel Steingestaltung',
    id: '1',
    position: center.value,
  },
])
</script>

<template>
  <GMapMap
    :center="center"
    :zoom="16"
    class="w-full min-h-96 h-[50dvh] rounded-lg overflow-hidden border border-gray-200 dark:border-gray-800"
  >
    <GMapCluster>
      <GMapMarker
        v-for="(m, index) in markers"
        :key="index"
        :position="m.position"
        :clickable="true"
        :draggable="true"
        @click="center = m.position"
      />
    </GMapCluster>
  </GMapMap>
</template>
