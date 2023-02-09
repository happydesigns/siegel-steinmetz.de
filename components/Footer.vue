<template>
  <div class="footer">
    <Split class="document">
      <span>
        <span class="h3">Navigation</span>
        <nuxt-link to="/">Startseite</nuxt-link>
        <nuxt-link to="/restaurierungen">Restaurierungen</nuxt-link>
        <nuxt-link to="/grabmale">Grabmale</nuxt-link>
        <nuxt-link to="/ueber-uns">Über uns</nuxt-link>
        <nuxt-link to="/galerie">Galerie</nuxt-link>
        <nuxt-link to="/kontakt">Kontakt</nuxt-link>
      </span>
      <span>
        <span class="h3">Rechtliches</span>
        <nuxt-link to="/impressum">Impressum</nuxt-link>
        <nuxt-link to="/datenschutz">Datenschutz</nuxt-link>
      </span>
      <span>
        <span class="h3">Kontakt</span>
        <a href="tel:+496264926444">
          <v-icon>mdi-phone</v-icon>06264 / 92 64 44
        </a>
        <p>
          Bernd Siegel
          <br>Steingestaltung
        </p>
        <p>
          Bahnhofstraße 13
          <br>74861 Neudenau
        </p>
      </span>
    </Split>
  </div>
</template>

<style scoped>
.footer {
  width: 100%;
  background-color: var(--page);
  padding: 32px;
}

.footer div {
  display: flex;
  justify-content: space-between;
}

a {
  display: block;
  font-weight: 500;
  width: max-content;
}

p,
a,
i {
  color: #555555 !important;
}

h3, .h3 {
  padding-top: 0;
  color: #2e2e2e;
  border-bottom: 2px solid #770019;
  margin-bottom: 12px;
  display: inline-block;
  font-size: 1.17rem;
  font-weight: bold;
}

i {
  font-size: 20px !important;
  margin-right: 4px;
}
</style>
