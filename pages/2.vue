<!-- Landing page - siegel-steinmetz.de -->
<script setup lang="ts">
useHead({
  title: 'Home',
})
</script>

<template>
  <div class="document page">
    <HeroSection image="banner.webp" />
    <Split class="my-8">
      <div class="card">
        <h2>
          <router-link to="/restaurierungen" class="siegel-primary">
            Restaurierungen
          </router-link>
        </h2>
        <figure>
          <img src="~/assets/img/home_1.jpg" alt="Restaurierungen" rounded>
        </figure>
        <p
          class="mt-4"
        >
          Unsere Firma hat als Schwerpunkt ihrer Arbeit die kompetente und sachgemäße Restaurierung, Aufbereitung und Pflege von alten Kirchen und Gebäuden sowie Grabmälern, Denkmälern und Bildhauerarbeiten im Programm.
        </p>
      </div>

      <div class="card">
        <h2>
          <router-link to="/grabmale" class="siegel-primary">
            Grabmale
          </router-link>
        </h2>
        <figure>
          <img src="~/assets/img/home_2.jpg" alt="Grabmale" rounded>
        </figure>
        <p class="mt-4">
          Wir gestalten gemeinsam mit Ihnen eine ganz persönliche Erinnerung an Ihren verstorbenen Verwandten, ein individuelles Grabmal.
          <br>Sie können aus einer Vielfalt an Materialien, Inschriften und Ornamenten wählen. Handwerkliche Grabmale werden direkt in Neudenau hergestellt. Industriell hergestellte Steine, beziehen wir von unserem Zulieferer.
        </p>
      </div>
    </Split>
  </div>
</template>

<style scoped>
/* .split > figure + p {
  margin-left: 32px;
}

.split figure,
.split p {
  max-width: 450px;
}

.split img {
  max-width: 100%;
} */
</style>
