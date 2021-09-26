<template>
  <div>
    <router-link to="/"><h1>Bernd Siegel Steingestaltung</h1></router-link>
    <p>
      Wir bieten einen umfassenden Service rund um den Naturstoff Stein:
    </p>
    <p>
      Die Pflege und Restauration von Gebäuden, Sandsteinfassaden, Fenstern, 
      Treppen, Geländern, Ornamenten, Denkmälern und Grabsteinen.
    </p>
    <p>
      <strong>
        Zum Grabmalkatalog: 
        <LinkExternal href="https://www.graef-granit.de/content/produkte">
          Gräf GmbH
        </LinkExternal>
      </strong>
    </p>
  </div>
</template>

<script>
import LinkExternal from '@/components/LinkExternal.vue'

export default {
  name: 'TextIntroduction',
  components: {
    LinkExternal
  }
}
</script>

<style lang="scss" scoped>
p {
  max-width: 600px;
}
</style>
