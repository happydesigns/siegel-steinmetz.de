<script setup lang="ts">
import { HFooterColumnHeading } from '#components'

const appConfig = useAppConfig()
</script>

<template>
  <div>
    <Wave />
    <UFooter>
      <template #top>
        <UContainer>
          <HFooterColumns :columns="appConfig.links?.footer">
            <template #right>
              <Snippet path="/snippets/address" :components="{ h3: HFooterColumnHeading }" class="text-sm" />
              <Snippet path="/snippets/contact" :components="{ h3: HFooterColumnHeading }" class="text-sm" />
            </template>
          </HFooterColumns>
        </UContainer>
      </template>
      <template #left>
        <HFooterCopyright />
      </template>
      <template #right>
        <UColorModeSelect :ui="{ base: 'w-32 dark:bg-raisin-cool', content: 'dark:bg-raisin-cool' }" />
      </template>
    </UFooter>
  </div>
</template>
