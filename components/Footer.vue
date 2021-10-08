<template>
  <div class="footer">
    <Split class="document">
      <span>
        <span class="h3">Navigation</span>
        <router-link to="/">Startseite</router-link>
        <router-link to="/restaurierungen">Restaurierungen</router-link>
        <router-link to="/grabmale">Grabmale</router-link>
        <router-link to="/ueber-uns">Über uns</router-link>
        <router-link to="/galerie">Galerie</router-link>
        <router-link to="/kontakt">Kontakt</router-link>
      </span>
      <span>
        <span class="h3">Rechtliches</span>
        <router-link to="/impressum">Impressum</router-link>
        <router-link to="/datenschutz">Datenschutz</router-link>
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