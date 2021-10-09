<template>
  <div class="document page">
    <div class="mt-8">
      <router-link to="/kontakt">
        <h1>Kontakt</h1>
      </router-link>
    </div>

    <div class="mb-8">
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
          <v-icon>mdi-phone</v-icon>06264 / 92 64 44
        </a>
        <br />
        <a href="tel:+496264926445" class="link-in">
          <v-icon>mdi-printer</v-icon>06264 / 92 64 45
        </a>
        <br />
        <a href="mailto:siegel.neudenau@t-online.de" class="link-in">
          <v-icon>mdi-email</v-icon>info@siegel-steinmetz.de
        </a>
      </div>

      <div id="map" />
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Kontakt",
      script: [
        {
          hid: "maps",
          src: "https://maps.googleapis.com/maps/api/js?key=AIzaSyDIfUVcub6RqXsutLIVam2Q9mEP3BML_KA",
          defer: true,
          callback: () => {
            new google.maps.Map(document.getElementById("map"), {
              zoom: 17,
              center: {
                lat: 49.28869,
                lng: 9.27136,
              },
            })
            console.log(JSON.stringify(google.maps.Map))            
          },
        },
      ],
    };
  }
};
</script>

<style scoped>
#map {
  width: 100%;
  height: 500px;
  border-radius: 4px;
}

.address a {
  color: #770019;
}

i {
  color: var(--light-s2) !important;
}
</style>
