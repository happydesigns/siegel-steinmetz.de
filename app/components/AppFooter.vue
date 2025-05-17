<script setup lang="ts">
import type { FooterProps } from '@nuxt/ui-pro'
import { HFooterColumnHeading } from '#components'
import { tv } from 'tailwind-variants'

type FooterUiProps = Partial<FooterProps['ui'] & {
  wave: string
  columns: any
}>

const props = withDefaults(defineProps<{
  ui?: FooterUiProps
  class?: string
}>(), {
  ui: () => ({}),
  class: undefined,
})

const appConfig = useAppConfig()

const ui = tv({
  slots: {
    wave: 'bg-gray-800 dark:bg-raisin-cool fill-white dark:fill-neutral-900',
  },
})

const { wave } = ui()
</script>

<template>
  <div>
    <Wave :class="wave?.({ class: props.ui?.wave })" />
    <UFooter>
      <template #top>
        <UContainer>
          <HFooterColumns :columns="appConfig.links?.footer">
            <template #right>
              <Snippet path="/snippets/address" :components="{ h3: HFooterColumnHeading }" class="text-sm" />
              <Snippet path="/snippets/contact" :components="{ h3: HFooterColumnHeading }" class="text-sm" />
            </template>
          </HFooterColumns>
        </UContainer>
      </template>
      <template #left>
        <HFooterCopyright />
      </template>
      <template #right>
        <UColorModeSelect :ui="{ base: 'w-32 dark:bg-raisin-cool', content: 'dark:bg-raisin-cool' }" />
      </template>
    </UFooter>
  </div>
</template>
