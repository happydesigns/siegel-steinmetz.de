<script setup lang="ts">
defineProps<{
  image: string
}>()
</script>

<template>
  <div>
    <img :src="image" class="banner" alt="Hero Image">
    <div>
      <h1 h1>
        Bernd Siegel Steingestaltung
      </h1>
      <p>Wir bieten einen umfassenden Service rund um den Naturstoff Stein:</p>
      <p>
        Die Pflege und Restauration von Gebäuden, Sandsteinfassaden, Fenstern,
        Treppen, Geländern, Ornamenten, Denkmälern und Grabsteinen.
      </p>
      <p>
        <strong>Zum Grabmalkatalog:
          <a
            href="https://www.graef-granit.de/content/produkte"
            target="_blank"
            rel="noopener"
          >Gräf GmbH</a>
        </strong>
      </p>
    </div>
  </div>
</template>

<style scoped>
.banner {
  border-radius: 4px;
  width: 100%;
  max-height: calc(16vw + 192px);
  height: 384px;
  margin: 0 0 0 auto;
  display: block;
  object-position: center 30%;
  object-fit: cover;
}

h1 {
  margin-top: 1rem;
}

p {
  max-width: 600px;
}
</style>
