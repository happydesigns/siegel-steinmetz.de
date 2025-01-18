<script setup lang="ts">
const route = useRoute()
const { data: page } = await useAsyncData(route.path, () => queryCollection('content').path(route.path).first()) as any
const headline = computed(() => page?.value?._dir ? findPageHeadline(page?.value) : '')
</script>

<template>
  <UMain :class="page?.ui?.wrapper" class="break-words">
    <UContainer :ui="{ padding: page?.container ? undefined : '', constrained: page?.container ? undefined : '' }">
      <UPageHeader v-if="page?.showHeader !== false" :title="page?.title" :description="page?.description" :links="page?.links" :headline="headline" />
      <UPageBody :prose="page?.prose !== false" class="pb-32" :class="[page?.ui?.body]">
        <slot />
      </UPageBody>
    </UContainer>
  </UMain>
</template>
