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
  <div v-bind="attrs" :class="props.class">
    <Wave class="rotate-180" :class="ui.wave" />
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
            <div class="space-y-4">
              <UFormGroup name="theme" label="Farbschema" class="light" :ui="{ label: { base: 'font-serif font-semibold text-gray-900' } }">
                <UColorModeSelect class="w-32 mt-6" select-class="dark:bg-inherit" :ui="{ select: 'bg-slate-800' }" :ui-menu="ui.menu" />
              </UFormGroup>
            </div>
          </template>
        </UFooterColumns>
      </template>
      <template #center>
        <p class="text-gray-500 dark:text-gray-400 text-sm">
          Copyright © {{ new Date().getFullYear() }}
          <NuxtLink to="https://www.happydesigns.de/" target="_blank">
            happydesigns
          </NuxtLink>
        </p>
      </template>
    </UFooter>
  </div>
</template>
