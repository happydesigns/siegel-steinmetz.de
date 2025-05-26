<script setup lang="ts">
const props = defineProps<{
  path?: string
}>()

const route = useRoute()
const path = computed(() => props.path)
const { data: page } = await usePageContent(path.value)

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: `Content page ${props.path || route.path} not found`, fatal: true })
}

usePageSeo(page)
const { containerClass } = usePageLayout(page)
</script>

<template>
  <UMain v-if="page" :ui="page.ui?.main" class="break-words">
    <UContainer :ui="{ padding: containerClass, constrained: containerClass, ...page.ui?.container }">
      <UPageHero
        v-if="page.hero"
        :ui="page.ui?.hero"
        v-bind="page.hero"
      >
        <template #description>
          <p>{{ page.hero.description }}</p>
          <slot name="description" />
        </template>
      </UPageHero>
      <UPageHeader
        v-if="page.header"
        :ui="page.ui?.header"
        v-bind="page.header"
      />

      <!-- Main Page Content -->
      <UPage>
        <UPageBody
          :prose="page.layout?.prose !== false"
          class="pb-32"
          :class="page.ui?.body"
        >
          <slot />
        </UPageBody>

        <!-- Table of Contents -->
        <template v-if="page.layout?.toc" #right>
          <UContentToc :links="page.body?.toc?.links" :ui="page.ui?.toc" class="bg-transparent" title="Inhaltsverzeichnis" />
        </template>
      </UPage>
    </UContainer>
  </UMain>
</template>
