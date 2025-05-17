<script setup lang="ts">
const { data: page } = await useAsyncData('landing', () => queryCollection('landing').path('/').first())

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Landing page not found', fatal: true })
}

usePageSeo(page)
</script>

<template>
  <NuxtLayout v-if="page">
    <UPageSection
      v-if="page.hero"
      v-bind="(page.hero as any)"
      :ui="{
        root: 'overflow-hidden',
        title: 'lg:font-medium text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl',
        container: 'relative overflow-visible flex flex-col-reverse lg:grid gap-8 pt-0 pb-28 sm:pt-6 sm:pb-32 lg:py-32 2xl:py-36',
      }"
    >
      <template #links>
        <div class="w-full">
          <h2 class="font-bold text-lg mb-2">
            Zum Grabmalkatalog:
          </h2>
        </div>
        <UButton
          v-for="(link, index) in page.hero.links"
          :key="index"
          v-bind="(link as any)"
        />
      </template>

      <HeroGradient class="lg:block absolute h-[1152px] left-[-18rem] -bottom-16 z-[-1] box-border" />

      <div class="lg:absolute md:right-0 lg:right-[-1rem] xl:right-[-8rem] 2xl:right-[-15rem] -mx-4 sm:m-0">
        <div class="relative">
          <NuxtImg
            :src="page.hero.image?.src"
            class="lg:block relative w-full lg:h-[360px] xl:h-[380px] 2xl:h-[420px] sm:rounded-sm aspect-[19/9] sm:aspect-[20/9] md:aspect-[21/9] lg:aspect-[7/5] xl:aspect-[16/9] object-cover md:object-[25%]"
            alt=""
          />
          <div class="hidden lg:block absolute inset-2 border-4 border-white dark:border-neutral-900 rounded-sm" />
        </div>
      </div>
    </UPageSection>

    <div class="bg-gradient-to-b from-white to-neutral-100 dark:from-neutral-900 dark:to-raisin">
      <UPageSection
        v-for="(section, index) in (page.sections as any)"
        :key="index"
        v-bind="section"
      >
        <template #default>
          <NuxtImg
            :src="section.image?.src"
            :alt="section.image?.alt"
            :class="section.image?.class"
            class="aspect-[10/7] object-cover w-full"
          />
        </template>
      </UPageSection>
    </div>
  </NuxtLayout>
</template>
