import { watchEffect } from 'vue'

interface SeoRelevantPageData {
  seo?: {
    title?: string
    description?: string
    ogTitle?: string
    ogDescription?: string
  }
  title?: string
  description?: string
}

export function usePageSeo(page: Ref<SeoRelevantPageData | null | undefined>) {
  watchEffect(() => {
    if (page.value) {
      const title = page.value.seo?.title || page.value.title
      const description = page.value.seo?.description || page.value.description
      const ogTitle = page.value.seo?.ogTitle || title
      const ogDescription = page.value.seo?.ogDescription || description

      useSeoMeta({
        title,
        ogTitle,
        description,
        ogDescription,
      })
    }
  })
}
