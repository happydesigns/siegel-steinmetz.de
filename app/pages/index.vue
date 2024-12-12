<script setup lang="ts">
const { data: page } = await useAsyncData('index', () => queryContent('/').findOne())

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

useSeoMeta({
  titleTemplate: '',
  title: page.value.title,
  ogTitle: page.value.title,
  description: page.value.description,
  ogDescription: page.value.description,
})
</script>

<template>
  <div v-if="page">
    <ULandingSection
      v-bind="page.hero"
      :ui="{
        wrapper: 'pt-0 pb-28 sm:pt-6 md:pb-32 lg:py-32 2xl:py-36 overflow-hidden',
        headline: 'mb-8',
        title: 'lg:font-medium text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl',
        container: 'relative overflow-visible flex flex-col-reverse lg:grid !gap-8',
      }"
    >
      <template v-if="page?.hero.headline" #headline>
        <NuxtLink :to="page.hero.headline.to">
          <UBadge color="white" size="md" class="relative px-3 rounded-full font-semibold dark:hover:bg-gray-400/15 dark:hover:ring-gray-700">
            {{ page?.hero.headline.label }}
            <UIcon
              v-if="page?.hero.headline.icon" :name="page?.hero.headline.icon"
              class="ml-1 w-4 h-4 pointer-events-none"
            />
          </UBadge>
        </NuxtLink>
      </template>

      <HeroGradient class="lg:block absolute h-[768px] left-[-18rem] bottom-[-8rem] z-[-1] box-border" />

      <div class="lg:absolute md:right-0 lg:right-[-1rem] xl:right-[-8rem] 2xl:right-[-15rem] -mx-4 sm:m-0">
        <div class="relative">
          <img
            :src="page.hero.image.src"
            class="lg:block relative w-full lg:h-[360px] xl:h-[380px] 2xl:h-[420px] sm:rounded-xl aspect-[19/9] sm:aspect-[20/9] md:aspect-[21/9] lg:aspect-[7/5] xl:aspect-[16/9] object-cover md:object-[25%]"
            alt="NuxtHub Deploy page"
          >
          <div class="hidden lg:block absolute inset-2 border border-4 border-gray-100 dark:border-gray-800 rounded-lg" />
        </div>
      </div>
    </ULandingSection>

    <!-- Landing Sections -->
    <div class="bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-raisin">
      <ULandingSection
        v-for="(section, index) in page.sections"
        :key="index"
        v-bind="section"
      >
        <template #default>
          <img
            :src="section.image.src"
            :alt="section.image.alt"
            :class="section.image.class"
            class="aspect-[10/7] object-cover"
          >
        </template>
      </ULandingSection>
    </div>
  </div>
</template>
