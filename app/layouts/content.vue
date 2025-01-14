<script setup lang="ts">
import type { Button } from '#ui/types'
import { defu } from 'defu'

export interface Props {
  container?: boolean
  description?: string
  links?: (Button & { click?: (() => void) | undefined })[]
  prose?: boolean
  ui?: { wrapper?: string, body?: string }
  header?: boolean
  toc?: boolean
  title?: string
}

const props = withDefaults(defineProps<Props>(), {
  container: true,
  prose: true,
  header: true,
  toc: true,
})

const { page: pageContent } = useContent()
const page = defu(pageContent.value, props)

const title = computed(() => page.title ?? '')
const headline = computed(() => pageContent?.value?._dir ? findPageHeadline(pageContent?.value) : '')

useSeoMeta({
  title: title.value,
})

const pageBodyWrapper = computed(() => page.header ? '' : 'mt-0')
</script>

<template>
  <UMain :class="page.ui?.wrapper" class="break-words">
    <UContainer :ui="{ padding: page?.container ? undefined : '', constrained: page.container ? undefined : '' }">
      <!-- <UPageHero v-if="page?.header !== false" v-bind="page.header" :title :headline>
        <template #description>
          <p>{{ page.description }}</p>
          <slot name="description" />
        </template>
      </UPageHero> -->
      <UPage>
        <UPageHeader v-if="page?.header !== false" :title="title" :description="page?.description" :links="page?.links" :headline="headline" />
        <UPageBody :prose="page?.prose !== false" class="pb-32" :ui="{ wrapper: pageBodyWrapper }" :class="[page.ui?.body]">
          <slot />
        </UPageBody>

        <template v-if="page.toc" #right>
          <UContentToc :links="page?.body?.toc?.links" class="bg-transparent" title="Inhaltsverzeichnis" />
        </template>
      </UPage>
    </UContainer>
  </UMain>
</template>
