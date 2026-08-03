<script setup lang="ts">
const { headerLinks } = useHeaderLinks()
</script>

<template>
  <UHeader>
    <template #title>
      <Logo class="w-auto h-12 dark:bg-white rounded-sm p-1" />
    </template>

    <UNavigationMenu :items="headerLinks" />

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
        :items="headerLinks"
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
