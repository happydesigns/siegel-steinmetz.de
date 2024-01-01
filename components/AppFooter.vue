<script setup lang="ts">
const appConfig = useAppConfig()
</script>

<!-- eslint-disable vue/no-extra-parens -->
<template>
  <UFooter
    :ui="{
      wrapper: 'bg-cool-800 dark:bg-cool-900 prose-invert dark',
      bottom: { wrapper: 'border-t border-gray-200 dark:border-cool-700', container: '!py-6', left: '~', center: '~', right: '~' },
      top: { wrapper: '', container: 'py-8 lg:py-12' },
    }"
  >
    <template #top>
      <UFooterColumns :links="appConfig.links?.footer">
        <template #right>
          <div class="space-y-4">
            <UFormGroup name="theme" label="Farbschema" :ui="{ label: { base: 'font-serif font-semibold text-gray-900' } }">
              <UColorModeSelect class="w-32 mt-6" select-class="dark:bg-cool-900" :ui="{ select: 'bg-slate-800' }" :ui-menu="{ background: 'dark:bg-cool-800', option: { active: 'dark:bg-cool-900' } }" />
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
</template>
