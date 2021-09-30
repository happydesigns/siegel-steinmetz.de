<template>
  <v-icon>mdi-menu</v-icon>
</template>

<script>
export default {
  name: 'Menu'
}
</script>

<style scoped>
.small span {
  font-size: 32px;
}

.v-icon {
  color: #2e2e2e;
  user-select: none;
  align-self: center;
  font-size: 40px;
  cursor: pointer;
  display: none;
}

@media (max-width: 800px) {
  .v-icon {
    display: block;
  }
}
</style>