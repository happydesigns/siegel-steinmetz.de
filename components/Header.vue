<!-- Header for each page, includes logo and navigation -->
<script setup lang="ts">
const drawer = ref(false)
const { y } = useWindowScroll()

const items = [
  { title: 'Restaurierungen', icon: 'mdi-hammer-wrench', url: '/restaurierungen' },
  { title: 'Grabmale', icon: 'mdi-grave-stone', url: '/grabmale' },
  { title: 'Über uns', icon: 'mdi-account', url: '/ueber-uns' },
  { title: 'Galerie', icon: 'mdi-image-multiple', url: '/galerie' },
  { title: 'Kontakt', icon: 'mdi-phone', url: '/kontakt' },
  { title: 'Impressum', icon: 'mdi-tooltip-account', url: '/impressum' },
  { title: 'Datenschutz', icon: 'mdi-shield', url: '/datenschutz' },
]

function toggleDrawer() {
  drawer.value = !drawer.value
}
</script>

<template>
  <div>
    <header class="document small" :class="{ scrolled: y > 64 }">
      <Logo />
      <Navigation />
      <Menu @click="toggleDrawer()" />
    </header>
    <header class="document">
      <Logo />
      <Navigation />
      <Menu @click="toggleDrawer()" />
    </header>
    <!-- <v-navigation-drawer
      v-model="drawer"
      class="white nav-drawer"
      temporary
      fixed
    >
      <v-list-item>
        <v-list-item-title class="text-h6">
          Navigation
        </v-list-item-title>
        <v-list-item-subtitle>Bernd Siegel Steingestaltung</v-list-item-subtitle>
      </v-list-item>

      <v-divider />

      <v-list dense nav>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          @click="$router.push(item.url)"
        >
          <v-icon>{{ item.icon }}</v-icon>

          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer> -->
  </div>
</template>

<style lang="scss" scoped>
aside {
  z-index: 1000;
}

h1 {
  margin: 16px 0 0 16px;
}

header {
  height: 128px;
  display: flex;
  justify-content: space-between;
  z-index: 1000;
  background: var(--document);
}

header.small {
  top: -64px;
  height: 64px;
  display: flex;
  justify-content: space-between;
  z-index: 1000;
  left: 0;
  right: 0;
  position: fixed;
  transition: top 0.4s;
}

header.scrolled {
  top: 0;
  box-shadow: 0px 12px 12px -12px rgba(0, 0, 0, 0.16);
}

.logo + .navigation {
  margin-left: 1rem;
}
</style>
