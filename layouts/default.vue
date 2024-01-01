<script setup lang="ts">
const { page } = useContent()
const headline = computed(() => page.value?._dir ? findPageHeadline(page.value) : '')
</script>

<template>
  <div>
    <UMain>
      <UContainer :ui="{ padding: page?.container ? undefined : '', constrained: page?.container ? undefined : '' }">
        <UPageHeader v-if="page?.showHeader !== false" :title="page?.title" :description="page?.description" :links="page?.links" :headline="headline" />
        <UPageBody :prose="page?.prose !== false" :class="[page?.ui?.body]">
          <slot />
        </UPageBody>
      </UContainer>
    </UMain>
    <Wave class="fill-cool-800 dark:fill-cool-800 rotate-180 -mb-[1px]" :class="[page?.ui?.wave]" />
  </div>
</template>
