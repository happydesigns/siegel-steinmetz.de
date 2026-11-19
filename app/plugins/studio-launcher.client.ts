export default defineNuxtPlugin(() => {
  const style = document.createElement('style')

  // Studio renders the launcher in its own shadow root without a CSS part.
  // Keep the override on the floating buttons and use Studio's light/dark tokens.
  style.textContent = `
    .fixed.bottom-2.left-2 button.bg-transparent.backdrop-blur-md {
      background-color: var(--ui-bg);
      color: var(--ui-text-highlighted);
      backdrop-filter: none;
    }

    .fixed.bottom-2.left-2 button.bg-transparent.backdrop-blur-md:is(:hover, :active) {
      background-color: var(--ui-bg-elevated);
    }
  `

  function applyLauncherStyle() {
    const root = document.querySelector('nuxt-studio')?.shadowRoot
    root?.append(style)
    return Boolean(root)
  }

  const observer = new MutationObserver(() => {
    if (applyLauncherStyle()) {
      observer.disconnect()
    }
  })

  if (!applyLauncherStyle()) {
    observer.observe(document.body, { childList: true })
  }

  import.meta.hot?.dispose(() => {
    observer.disconnect()
    style.remove()
  })
})
