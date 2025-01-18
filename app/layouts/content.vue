<script setup lang="ts">
const route = useRoute()
const { data: page } = await useAsyncData(route.path, () => queryCollection('content').path(route.path).first())

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: `Content page ${route.path} not found`, fatal: true })
}

useSeoMeta({
  title: page.value.seo?.title || page.value.title,
  ogTitle: page.value.seo?.title || page.value.title,
  description: page.value.seo?.description || page.value.description,
  ogDescription: page.value.seo?.description || page.value.description,
})

const preferredMetaComponent = page.value.layout?.metadataComponent || 'header'
const useHero = !!page.value.hero || preferredMetaComponent === 'hero'
const useHeader = !!page.value.header || preferredMetaComponent === 'header'

if (useHero) {
  page.value.hero = {
    title: page.value.hero?.title || page.value.title,
    description: page.value.hero?.description || page.value.description,
  }
}

if (useHeader) {
  page.value.header = {
    title: page.value.header?.title || page.value.title,
    description: page.value.header?.description || page.value.description,
  }
}

const containerClass = computed(() =>
  page.value?.layout?.container === false ? '' : undefined,
)
const pageBodyWrapper = computed(() =>
  page.value?.header ? '' : 'mt-0',
)
</script>

<template>
  <UMain v-if="page" :ui="page.ui?.main" class="break-words">
    <UContainer :ui="{ padding: containerClass, constrained: containerClass, ...page.ui?.container }">
      <!-- Render components based on resolvedComponents -->
      <UPageHero
        v-if="page.hero"
        :ui="page.ui?.hero"
        v-bind="(page.hero as any)"
      >
        <template #description>
          <p>{{ page.hero.description }}</p>
          <slot name="description" />
        </template>
      </UPageHero>
      <UPageHeader
        v-if="page.header"
        :ui="page.ui?.header"
        v-bind="(page.header as any)"
      />

      <!-- Main Page Content -->
      <UPage>
        <UPageBody
          :prose="page.layout?.prose !== false"
          class="pb-32"
          :ui="{ wrapper: pageBodyWrapper, ...page.ui?.body }"
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
