<script setup lang="ts">
const appConfig = useAppConfig()
</script>

<template>
  <UHeader>
    <template #title>
      <Logo class="w-auto h-12 dark:bg-white rounded-md p-1" />
    </template>

    <UNavigationMenu :items="appConfig.links.header" />

    <template #right>
      <UButton to="/kontakt" label="Kontakt" color="neutral" class="hidden lg:flex" icon="i-ph-phone-duotone" />
    </template>

    <template #content>
      <UNavigationMenu :items="appConfig.links.header" orientation="vertical" :ui="{ active: 'text-primary-900 dark:text-primary-400', icon: { active: 'bg-primary-900 dark:bg-primary', inactive: 'group-hover:bg-primary-900 dark:group-hover:bg-primary', wrapper: '~', base: '~' } }" />
      <USeparator class="my-6" />
      <UButton to="/kontakt" label="Kontakt" icon="i-ph-phone-duotone" block />
    </template>
  </UHeader>
</template>
