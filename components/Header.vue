<!--Header for each page, includes logo and navigation-->
<template>
  <div>
    <header class="document small" :class="{'scrolled': this.scrollY > 64}">
      <Logo />
      <Navigation />
      <Menu @click.native="openNavigation()"/>
    </header>
    <header class="document">
      <Logo />
      <Navigation />
      <Menu @click.native="openNavigation()"/>
    </header>
    <v-navigation-drawer
        v-model="drawer"
        class="white nav-drawer"
        temporary
        fixed
      >
      <h1>Navigation</h1>
        <v-list>
          <v-list-item
            v-for="item in items"
            :key="item.title"
          >
          <router-link :to="item.url">
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
  
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
            </router-link>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      scrollY: 0,
      drawer: false,
      items: [
        { title: 'Restaurierungen', icon: 'subject', url: '/restaurierungen' },
        { title: 'Grabmale', icon: 'subject', url: '/grabmale' },
        { title: 'Über uns', icon: 'person', url: '/ueber-uns' },
        { title: 'Galerie', icon: 'photo_library', url: '/galerie' },
        { title: 'Kontakt', icon: 'contact_phone', url: '/kontakt' },
        { title: 'Impressum', icon: 'short_text', url: '/impressum' },
        { title: 'Datenschutz', icon: 'description', url: '/datenschutz' }
      ]
    }
  },
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll: function() {
      this.scrollY = window.scrollY
    },
    openNavigation: function() {
      this.drawer = !this.drawer;
    }
  }
}
</script>

<style lang="scss" scoped>
a {
  display: inline-flex;
  color: unset !important;
}

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
  padding: 4px 16px;
  position: fixed;
  transition: top 0.4s;
}

header.scrolled {
  top: 0;
  box-shadow: 0px 4px 12px -4px rgba(0, 0, 0, 0.16);
}

.logo + .navigation {
  margin-left: 1rem;
}
</style>
