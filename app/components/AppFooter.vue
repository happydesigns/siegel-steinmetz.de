<script setup lang="ts">
import { HFooterColumnHeading } from '#components'

const { footerLinks } = useFooterLinks()
</script>

<template>
  <div>
    <Wave />
    <UFooter>
      <template #top>
        <UContainer>
          <HFooterColumns :columns="footerLinks">
            <template #right>
              <HSnippet path="/snippets/address" :components="{ h3: HFooterColumnHeading }" class="text-sm" />
              <HSnippet path="/snippets/contact" :components="{ h3: HFooterColumnHeading }" class="text-sm" />
            </template>
          </HFooterColumns>
        </UContainer>
      </template>
      <template #left>
        <HFooterCopyright />
      </template>
      <template #right>
        <UColorModeButton />
      </template>
    </UFooter>
  </div>
</template>
