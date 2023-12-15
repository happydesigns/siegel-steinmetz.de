<script setup lang="ts">
const { page } = useContent()
</script>

<template>
  <UMain>
    <UContainer :ui="{ padding: page?.container ? undefined : '', constrained: page?.container ? undefined : '' }">
      <slot />
    </UContainer>
  </UMain>
</template>
