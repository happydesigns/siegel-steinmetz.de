<template>
  <span class="material-icons">menu</span>
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

span {
  color: #2e2e2e;
  user-select: none;
  align-self: center;
  font-size: 48px;
  cursor: pointer;
}

@media (min-width: 801px) {
  span {
    display: none;
  }
}
</style>