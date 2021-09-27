<template>
  <div class="mt-8 mb-4 document">
    <router-link to="/kontakt">
      <h1>Kontakt</h1>
    </router-link>
    <div class="address mb-4">
      <h2 class="mb-1">Anschrift</h2>
      <p>
        Bernd Siegel
        <br />Steingestaltung
      </p>
      <p>
        Bahnhofstraße 13
        <br />74861 Neudenau
      </p>
      <a href="tel:+496264926444" class="link-in">
        <i class="material-icons">phone</i>06264 / 92 64 44
      </a>
      <br />
      <a href="tel:+496264926445" class="link-in">
        <i class="material-icons">print</i>06264 / 92 64 45
      </a>
      <br />
      <a href="mailto:siegel.neudenau@t-online.de" class="link-in">
        <i class="material-icons">mail</i>info@siegel-steinmetz.de
      </a>
    </div>

    <div id="map"></div>
  </div>
</template>

<script>
export default {
  mounted() {
    let location = {
      lat: 49.28869,
      lng: 9.27136
    };
    this.map = new google.maps.Map(document.getElementById("map"), {
      zoom: 16,
      center: location
    });
  }
};
</script>

<style scoped>
#map {
  width: 100%;
  height: 500px;
}

.address a {
  color: #770019;
}
</style>
