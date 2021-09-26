<!--Header for each page, includes logo and navigation-->
<template>
  <div>
    <header class="document small" :class="{'scrolled': this.scrollY > 64}">
      <Logo />
      <Navigation />
      <Menu @click.native="openNavigation()"/>
    </header>
    <!-- <NavigationDrawer :drawer="open"/> -->
  </div>
</template>

<script>
import Logo from '@/components/Logo.vue'
import Navigation from '@/components/Navigation.vue'
import Menu from '@/components/Menu.vue'
import NavigationDrawer from '@/components/NavigationDrawer.vue'

export default {
  components: {
    Logo,
    Navigation,
    Menu,
    NavigationDrawer
  },
  data() {
    return {
      scrollY: 0,
      open: false
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll: function() {
      // console.log(window.scrollY);
      this.scrollY = window.scrollY
    },
    openNavigation: function() {
      this.open = !this.open;
    }
  }
}
</script>

<style lang="scss" scoped>
header {
  top: -64px;
  height: 64px;
  display: flex;
  justify-content: space-between;
  z-index: 1000;
  left: 0;
  right: 0;
  padding: 4px 16px;
  position: fixed;
  background-color: white;
  transition: top 0.4s;
  
}

header.scrolled {
  top: 0;
  box-shadow: 0 4px 5px 0 rgba(0,0,0,0.14), 0 1px 10px 0 rgba(0,0,0,0.12), 0 2px 4px -1px rgba(0,0,0,0.20);
  box-shadow: 0px 6px 6px -4px rgba(0, 0, 0, 0.2), 0px 10px 14px 1px rgba(0, 0, 0, 0.14), 0px 4px 18px 3px rgba(0, 0, 0, 0.12);
}
</style>
