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
  <UColorModeSelect class="w-32" select-class="dark:bg-inherit" :ui-menu="ui.menu" />
</template>
