import { readFileSync } from 'node:fs'
import { describe, expect, it } from 'vitest'

const footer = readFileSync(new URL('../app/components/AppFooter.vue', import.meta.url), 'utf8')
const contentPage = readFileSync(new URL('../app/pages/[...slug].vue', import.meta.url), 'utf8')
const legalPage = readFileSync(new URL('../app/pages/impressum.vue', import.meta.url), 'utf8')
const contentConfig = readFileSync(new URL('../content.config.ts', import.meta.url), 'utf8')
const galleryPage = readFileSync(new URL('../app/pages/galerie/[...slug].vue', import.meta.url), 'utf8')

describe('shared UI integration', () => {
  it('uses the public prefixed snippet component', () => {
    expect(footer).toContain('<HSnippet path=')
  })

  it('renders the media gallery through the shared full-width page layout', () => {
    expect(galleryPage).toContain('<NuxtLayout name="page" :path="rootPath">')
    expect(galleryPage).toContain('<Gallery :albums="albums" />')
  })

  it('binds each shared layout to the collection with the matching variant schema', () => {
    expect(contentPage).toContain('usePageContent({ collection: \'content\' })')
    expect(contentPage).toContain('<NuxtLayout name="content" collection="content">')
    expect(legalPage).toContain('usePageContent({ collection: \'page\' })')
    expect(legalPage).toContain('<NuxtLayout name="page" collection="page">')
    expect(contentConfig).toContain('mergeVariantSchemas([\'content\'], variantSchemas)')
    expect(contentConfig).toContain('mergeVariantSchemas([\'page\'], variantSchemas)')
    expect(contentConfig).toContain('include: \'page/**/*.{md,yaml}\'')
  })
})
