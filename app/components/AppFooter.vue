<script setup lang="ts">
import type { FooterProps } from '@nuxt/ui-pro'
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

const footer = tv({
  slots: appConfig.uiPro?.footer?.slots || {},
  extend: props.ui,
})

const footerColumns = tv({
  slots: appConfig.uiPro?.footerColumns?.slots || {},
  extend: props.ui?.columns,
})

const ui = footer({ class: props.class })
const columnsUi = footerColumns()
</script>

<template>
  <div>
    <Wave :class="ui.wave?.({ class: props.ui?.wave })" />
    <UFooter>
      <template #top>
        <UContainer>
          <UFooterColumns :columns="appConfig.links?.footer">
            <template #right>
              <div class="flex flex-col lg:grid grid-flow-col auto cols-fr gap-8 xl:col-span-2 grid-cols-3 xl:grid-cols-none text-gray-600 dark:text-gray-300 text-sm prose">
                <div :class="columnsUi.center?.()">
                  <h3 class="font-semibold text-neutral-900 dark:text-white mb-6">
                    Anschrift
                  </h3>
                  <ProseP>Bernd Siegel<br>Steingestaltung</ProseP>
                  <ProseP>Bahnhofstraße 13<br>74861 Neudenau</ProseP>
                </div>
                <div :class="columnsUi.right?.()">
                  <h3 class="text-sm font-semibold text-neutral-900 dark:text-white mb-6">
                    Kontakt
                  </h3>
                  <ProseP>
                    <UIcon name="i-ph-phone-fill" /> 06264 / 92 64 44<br>
                    <UIcon name="i-ph-printer-fill" /> 06264 / 92 64 45<br>
                  </ProseP>
                  <ProseP>
                    <UIcon name="i-ph-envelope-fill" /> info@siegel-steinmetz.de
                  </ProseP>
                </div>
              </div>
            </template>
          </UFooterColumns>
        </UContainer>
      </template>
      <template #left>
        <p class="text-neutral-500 dark:text-neutral-400 text-sm">
          Copyright © {{ new Date().getFullYear() }}
          <ULink to="https://www.happydesigns.de/" target="_blank">
            happydesigns
          </ULink>
        </p>
      </template>
      <template #right>
        <UColorModeSelect :ui="{ base: 'w-32 dark:bg-raisin-cool', content: 'dark:bg-raisin-cool' }" />
      </template>
    </UFooter>
  </div>
</template>
