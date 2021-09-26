<!--Link navigating to external websites-->
<template>
  <a target="_blank">
    <slot/>
  </a>
</template>

<script>
export default {
  name: 'LinkExternal'
}
</script>

<style lang="scss" scoped>
a {
  color: #1976d2;
}
</style>
