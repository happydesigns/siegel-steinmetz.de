<!-- eslint-disable vue/valid-template-root -->
<script setup lang="ts">
definePageMeta({
  variant: 'content',
  validate: isContentPageRoute,
})
</script>

<template>
  <HContentPage collection="page" />
</template>
