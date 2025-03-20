<script setup lang="ts">
const appConfig = useAppConfig()
</script>

<template>
  <UHeader>
    <template #title>
      <Logo class="w-auto h-12 dark:bg-white rounded p-1" />
    </template>

    <UNavigationMenu :items="appConfig.links.header" />

    <template #right>
      <UButton
        to="/kontakt"
        label="Kontakt"
        color="neutral"
        class="hidden lg:flex"
        icon="i-ph-phone-duotone"
      />
    </template>

    <template #body>
      <UNavigationMenu
        :items="appConfig.links.header"
        orientation="vertical"
      />
      <USeparator class="my-6" />
      <UButton
        to="/kontakt"
        label="Kontakt"
        icon="i-ph-phone-duotone"
        block
      />
    </template>
  </UHeader>
</template>
