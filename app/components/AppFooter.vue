<script setup lang="ts">
const props = withDefaults(defineProps<{
  ui?: Partial<typeof config>
  class?: any
}>(), {
  ui: () => ({}),
  class: undefined,
})

const appConfig = useAppConfig()

const config = {
  wrapper: '',
  menu: {},
  wave: '',
}

const { ui, attrs } = useUI('footer', toRef(props, 'ui'), config, toRef(props, 'class'), true)
</script>

<!-- eslint-disable vue/no-extra-parens -->
<template>
  <div>
    <!-- <Wave class="rotate-180" :class="ui.wave" />
    <UFooter
      :ui="{
        wrapper: 'dark',
        bottom: { wrapper: 'border-t border-gray-200 dark:border-cool-700', container: '!py-6', left: '~', center: '~', right: '~' },
        top: { wrapper: '', container: 'py-8 lg:py-12' },
      }"
    >
      <template #top>
        <UFooterColumns :links="appConfig.links?.footer">
          <template #right>
            <div class="flex flex-col lg:grid grid-flow-col auto cols-fr gap-8 xl:col-span-2 text-gray-600 dark:text-gray-300 text-sm">
              <div class="space-y-4">
                <h3 class="font-semibold text-gray-900 dark:text-white mb-6">
                  Anschrift
                </h3>
                <p>Bernd Siegel<br>Steingestaltung</p>
                <p>Bahnhofstraße 13<br>74861 Neudenau</p>
              </div>
              <div class="space-y-4">
                <h3 class="text-sm font-semibold text-gray-900 dark:text-white mb-6">
                  Kontakt
                </h3>
                <p>
                  <UIcon name="i-ph-phone-fill" class="-mb-0.5 mr-1" /> 06264 / 92 64 44<br>
                  <UIcon name="i-ph-printer-fill" class="-mb-0.5 mr-1" /> 06264 / 92 64 45<br>
                </p>
                <p>
                  <UIcon name="i-ph-envelope-fill" class="-mb-0.5 mr-1" /> info@siegel-steinmetz.de
                </p>
              </div>
            </div>
          </template>
        </UFooterColumns>
      </template>
      <template #left>
        <p class="text-gray-500 dark:text-gray-400 text-sm">
          Copyright © {{ new Date().getFullYear() }}
          <NuxtLink to="https://www.happydesigns.de/" target="_blank">
            happydesigns
          </NuxtLink>
        </p>
      </template>
      <template #right>
        <UColorModeSelect class="w-32" select-class="dark:bg-inherit" :ui-menu="ui.menu" />
      </template>
    </UFooter> -->
  </div>
</template>
