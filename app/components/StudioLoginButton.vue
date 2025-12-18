<script setup lang="ts">
const runtimeConfig = useRuntimeConfig()

const sessionCheckCookie = useCookie('studio-session-check')
const sessionUser = ref<null | { email?: string } | undefined>(undefined)

const studioEnabled = computed(() => Boolean(runtimeConfig.public?.studio))
const studioRoute = computed(() => runtimeConfig.public?.studio?.route || '/_studio')

onMounted(async () => {
  if (!studioEnabled.value || runtimeConfig.public?.studio?.dev) {
    return
  }

  if (String(sessionCheckCookie.value) !== 'true') {
    sessionUser.value = null
    return
  }

  try {
    const session = await $fetch('/__nuxt_studio/auth/session')
    sessionUser.value = (session as any)?.user ?? null
  }
  catch {
    sessionUser.value = null
  }

  if (!sessionUser.value?.email) {
    sessionCheckCookie.value = null
  }
})

const isLoggedIn = computed(() => {
  if (runtimeConfig.public?.studio?.dev) {
    return true
  }

  if (String(sessionCheckCookie.value) !== 'true') {
    return false
  }

  if (sessionUser.value === undefined) {
    return true
  }

  return Boolean(sessionUser.value?.email)
})

const loginTo = computed(() => studioRoute.value)

const showLoginButton = computed(() => studioEnabled.value && !isLoggedIn.value)
</script>

<template>
  <UButton
    v-if="showLoginButton"
    :to="loginTo"
    :external="true"
    aria-label="Login"
    icon="i-lucide-log-in"
    color="neutral"
    variant="outline"
    size="sm"
    class="fixed bottom-2 left-2 z-50 print:hidden"
  />
</template>
