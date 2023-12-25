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
      <UButton to="/kontakt" label="Kontakt" icon="i-ph-phone-duotone" block />
    </template>

    <template #right>
      <UButton to="/kontakt" label="Kontakt" color="black" class="hidden lg:flex" icon="i-ph-phone-duotone" />
    </template>
  </UHeader>
</template>
