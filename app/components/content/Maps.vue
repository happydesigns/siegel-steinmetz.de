<script setup lang="ts">
const config = useRuntimeConfig()

const center = {
  lat: 49.28870391845703,
  lng: 9.270670890808105,
} satisfies google.maps.LatLngLiteral

const directionsUrl = 'https://www.google.com/maps/dir/?api=1&destination=49.28870391845703%2C9.270670890808105'
const googleMap = shallowRef<google.maps.Map>()
const hasError = ref(false)

const mapIds = computed(() => {
  const mapId = config.public.googleMapsMapId

  return mapId
    ? { dark: mapId, light: mapId }
    : undefined
})

const mapOptions = {
  center,
  clickableIcons: false,
  gestureHandling: 'cooperative',
  zoom: 16,
} satisfies google.maps.MapOptions

function handleMapReady(payload: { map: { value: google.maps.Map | undefined } }) {
  googleMap.value = payload.map.value
  hasError.value = false
}

function resetMapView() {
  googleMap.value?.moveCamera({ center, zoom: 16 })
}
</script>

<template>
  <div class="not-prose space-y-3">
    <ScriptGoogleMaps
      trigger="click"
      language="de"
      region="DE"
      width="100%"
      height="clamp(24rem, 60dvh, 42rem)"
      :map-ids="mapIds"
      :map-options="mapOptions"
      :root-attrs="{
        class: 'overflow-hidden rounded-sm border border-default bg-elevated',
      }"
      @error="hasError = true"
      @ready="handleMapReady"
    >
      <ScriptGoogleMapsMarker
        :position="center"
        :options="{ title: 'Bernd Siegel Steingestaltung' }"
      />

      <button
        v-if="googleMap"
        type="button"
        aria-label="Standort zentrieren"
        title="Standort zentrieren"
        class="absolute right-3 top-16 z-10 grid size-10 place-items-center rounded-sm bg-[#3c4043] text-white shadow hover:bg-[#4b4f52] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        @click.stop="resetMapView"
      >
        <UIcon
          name="i-lucide-locate-fixed"
          class="size-5"
          aria-hidden="true"
        />
      </button>

      <template #placeholder>
        <div
          class="absolute inset-0 bg-elevated"
          aria-hidden="true"
        />
      </template>

      <template #awaitingLoad>
        <div class="absolute inset-0 flex items-center justify-center p-6 text-center">
          <div class="max-w-md rounded-lg border border-default bg-default p-6 shadow-md">
            <UIcon
              name="i-ph-map-pin-duotone"
              class="mx-auto mb-4 size-10 text-primary"
              aria-hidden="true"
            />
            <p class="text-xl font-semibold text-highlighted">
              Interaktive Karte
            </p>
            <p class="mt-2 text-sm text-muted">
              Beim Laden der Karte wird eine Verbindung zu Google hergestellt. Weitere Informationen finden Sie in unserer Datenschutzerklärung.
            </p>
            <UButton
              class="mt-5"
              icon="i-ph-map-pin-duotone"
              label="Google Maps laden"
            />
          </div>
        </div>
      </template>

      <template #loading>
        <div class="absolute inset-0 flex items-center justify-center bg-elevated p-6 text-center">
          <div v-if="hasError" class="max-w-md">
            <UIcon
              name="i-ph-warning-octagon-duotone"
              class="mx-auto mb-3 size-9 text-error"
              aria-hidden="true"
            />
            <p class="font-medium text-highlighted">
              Die Karte konnte nicht geladen werden.
            </p>
            <p class="mt-1 text-sm text-muted">
              Nutzen Sie alternativ den Link unterhalb der Karte.
            </p>
          </div>
          <div v-else role="status">
            <UIcon
              name="i-lucide-loader-circle"
              class="mx-auto mb-3 size-8 animate-spin text-primary motion-reduce:animate-none"
              aria-hidden="true"
            />
            <span class="text-sm text-muted">Google Maps wird geladen …</span>
          </div>
        </div>
      </template>

      <template #error />
    </ScriptGoogleMaps>

    <UButton
      :to="directionsUrl"
      target="_blank"
      rel="noopener noreferrer"
      variant="link"
      color="neutral"
      trailing-icon="i-lucide-external-link"
      label="Route in Google Maps öffnen"
      class="px-0"
    />
  </div>
</template>
