interface LayoutRelevantPageData {
  layout?: {
    metadataComponent?: string
    container?: boolean
  }
  hero?: {
    title?: string
    description?: string
  }
  header?: {
    title?: string
    description?: string
  }
  title?: string
  description?: string
}

export function usePageLayout(page: Ref<LayoutRelevantPageData | null | undefined>) {
  const metaComponentPreference = computed(() => page.value?.layout?.metadataComponent || 'header')
  const useHero = computed(() => !!page.value?.hero || metaComponentPreference.value === 'hero')
  const useHeader = computed(() => !!page.value?.header || metaComponentPreference.value === 'header')

  watchEffect(() => {
    if (page.value) {
      if (useHero.value) {
        page.value.hero = {
          ...page.value.hero,
          title: page.value.hero?.title || page.value.title,
          description: page.value.hero?.description || page.value.description,
        }
      }

      if (useHeader.value) {
        page.value.header = {
          ...page.value.header,
          title: page.value.header?.title || page.value.title,
          description: page.value.header?.description || page.value.description,
        }
      }
    }
  })

  const containerClass = computed(() =>
    page.value?.layout?.container === false ? '' : undefined,
  )

  return {
    metaComponentPreference,
    useHero,
    useHeader,
    containerClass,
  }
}
