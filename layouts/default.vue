<script setup lang="ts">
const { page } = useContent()
const headline = computed(() => page.value?._dir ? findPageHeadline(page.value) : '')
</script>

<template>
  <UMain>
    <UContainer :ui="{ padding: page?.container ? undefined : '', constrained: page?.container ? undefined : '' }">
      <UPageHeader :title="page?.title" :description="page?.description" :links="page?.links" :headline="headline" />
      <UPageBody prose>
        <slot />
      </UPageBody>
    </UContainer>
  </UMain>
</template>
