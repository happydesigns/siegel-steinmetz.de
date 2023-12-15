<script setup lang="ts">
const appConfig = useAppConfig()
</script>

<template>
  <UHeader :links="appConfig.links.header">
    <template #logo>
      <Logo class="w-auto h-10" />
    </template>

    <template #panel>
      <UAsideLinks :links="appConfig.links.header" />
      <UDivider class="my-6" />
      <UButton block label="Kontakt" to="/kontakt" />
    </template>

    <template #right>
      <UButton label="Kontakt" color="black" class="hidden lg:flex" to="/kontakt" />
    </template>
  </UHeader>
</template>
