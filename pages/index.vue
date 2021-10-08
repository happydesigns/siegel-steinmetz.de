<!--Landing page - siegel-steinmetz.de-->
<template>
  <div class="document page">
    <HeroSection image="banner.webp">
    </HeroSection>
    <Split class="my-8">
      <div class="card">
        <h2><router-link to="/restaurierungen" class="siegel-primary">Restaurierungen</router-link></h2>
        <figure>
          <nuxt-img src="home_1.jpg" alt="Restaurierungen" />
        </figure>
        <p
          class="mt-4"
        >Unsere Firma hat als Schwerpunkt ihrer Arbeit die kompetente und sachgemäße Restaurierung, Aufbereitung und Pflege von alten Kirchen und Gebäuden sowie Grabmälern, Denkmälern und Bildhauerarbeiten im Programm.</p>
      </div>

      <div class="card">
        <h2><router-link to="/grabmale" class="siegel-primary">Grabmale</router-link></h2>
        <figure>
          <nuxt-img src="home_2.jpg" alt="Grabmale" />
        </figure>
        <p class="mt-4">
          Wir gestalten gemeinsam mit Ihnen eine ganz persönliche Erinnerung an Ihren verstorbenen Verwandten, ein individuelles Grabmal.
          <br />Sie können aus einer Vielfalt an Materialien, Inschriften und Ornamenten wählen. Handwerkliche Grabmale werden direkt in Neudenau hergestellt. Industriell hergestellte Steine, beziehen wir von unserem Zulieferer.
        </p>
      </div>
    </Split>
  </div>
</template>

<script>
export default {

};
</script>

<style scoped>
@media (min-width: 550px) {
  .card {
    margin-right: 1rem;
  }
}

.split {
  justify-content: space-between;
}

.split > div {
  max-width: 450px;
}

.split > figure + p {
  margin-left: 32px;
}

.split figure,
.split p {
  max-width: 450px;
}

.split img {
  max-width: 100%;
}

img {
  border-radius: 4px;
}
</style>
