<template>
  <div class="split">
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'Split'
}
</script>

<style scoped>
.split {
  display: flex;
  flex-wrap: wrap;
}

.split > * {
  /* flex: 0 1 50%; */
}
</style>