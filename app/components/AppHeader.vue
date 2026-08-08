<template>
  <HSiteHeader title="Bernd Siegel Steingestaltung">
    <template #title>
      <Logo class="w-auto h-12 dark:bg-white rounded-sm p-1" />
    </template>

    <template #right>
      <UButton
        to="/kontakt"
        label="Kontakt"
        color="neutral"
        class="hidden lg:flex"
        icon="i-ph-phone-duotone"
      />
    </template>

    <template #body-after>
      <USeparator class="my-6" />
      <UButton
        to="/kontakt"
        label="Kontakt"
        icon="i-ph-phone-duotone"
        block
      />
    </template>
  </HSiteHeader>
</template>
