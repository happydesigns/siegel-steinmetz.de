<!--Main navigation - Restaurierungen | Grabmale | Über uns | Galerien | Kontakt-->
<template>
  <span class="navigation">
    <router-link class="siegel-primary" to="/restaurierungen">Restaurierungen</router-link>
    <router-link class="siegel-primary" to="/grabmale">Grabmale</router-link>
    <router-link class="siegel-primary" to="/ueber-uns">Über uns</router-link>
    <router-link class="siegel-primary" to="/galerie">Galerie</router-link>
    <router-link class="siegel-primary" to="/kontakt">Kontakt</router-link>
  </span>
</template>

<script>
export default {
  name: "Navigation"
};
</script>

<style lang="scss" scoped>
.navigation {
  display: flex;
  align-items: center;
}

@media (max-width: 800px) {
  .navigation {
    display: none;
  }
}

.small a {
  font-size: 1.25rem;
}

a {
  text-decoration: none;
  font-size: 1.25rem;
  font-weight: 500;
  white-space: nowrap;
  margin: 0.5rem 1.25rem;
  display: inline-block;
}
</style>
