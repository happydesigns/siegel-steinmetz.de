<!--Imprint page - siegel-steinmetz.de/impressum-->
<template>
  <div class="document page">
    <div class="mt-8">
      <router-link to="/impressum">
        <h1>Impressum</h1>
      </router-link>
    </div>
    <Split class="my-8">
      <span>
        <p>
          Bernd Siegel
          <br />Steingestaltung
          <br />Bahnhofstraße 13
          <br />74861 Neudenau
        </p>
        <p>
          Tel.: 06264 92 64 44
          <br />Fax: 06264 92 64 45
        </p>
        <p>
          E-Mail:
          <a href="mailto:siegel.neudenau@t-online.de" class="siegel-primary">siegel.neudenau@t-online.de</a>
        </p>
        <p>
          Inhaltlich Verantwortlicher gem. § 55 II RStV:
          <br />Bernd Siegel (Anschrift s.o.)
        </p>
        <p>
          Umsatzsteuer-Identifikationsnummer gem. § 27a UStG:
          <br />DE 212603016
        </p>
      </span>
      <span>
        <h2>Zuständige Kammer</h2>
        <p>
          Handwerkskammer Heilbronn
          <br />Allee 76, 74072 Heilbronn
          <br />+49 711 61 94 80
          <br />
          <LinkExternal href="www.hwk-heilbronn.de">www.hwk-heilbronn.de</LinkExternal>
        </p>
        <h2>Urheberrecht / Leistungsschutzrecht</h2>
        <p>Die auf dieser Webseite veröffentlichten Inhalte, Werke und bereitgestellten Informationen unterliegen dem deutschen Urheberrecht und Leistungsschutzrecht. Jede Art der Vervielfältigung, Bearbeitung, Verbreitung, Einspeicherung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechts bedarf der vorherigen schriftlichen Zustimmung des jeweiligen Rechteinhabers. Das unerlaubte Kopieren/Speichern der bereitgestellten Informationen auf diesen Webseiten ist nicht gestattet und strafbar.</p>
      </span>
    </Split>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Impressum"
    }
  }
}
</script>

<style scoped>
.split span {
  min-width: 50%;
  flex: 0 1 450px
}
</style>