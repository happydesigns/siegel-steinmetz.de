import { readFileSync } from 'node:fs'
import { describe, expect, it } from 'vitest'

const footer = readFileSync(new URL('../app/components/AppFooter.vue', import.meta.url), 'utf8')
const contentPage = readFileSync(new URL('../app/pages/[...slug].vue', import.meta.url), 'utf8')
const contentConfig = readFileSync(new URL('../content.config.ts', import.meta.url), 'utf8')
const galleryPage = readFileSync(new URL('../app/pages/galerie/[...slug].vue', import.meta.url), 'utf8')

describe('shared UI integration', () => {
  it('uses the public prefixed snippet component', () => {
    expect(footer).toContain('<HSnippet path=')
  })

  it('renders the media gallery through the shared content layout without a toc', () => {
    expect(galleryPage).toContain('<NuxtLayout name="content" :path="rootPath" collection="content">')
    expect(galleryPage).toContain('<Gallery :albums="albums" />')
  })

  it('renders all content-backed pages through one collection and layout', () => {
    expect(contentPage).toContain('usePageContent({ collection: \'content\' })')
    expect(contentPage).toContain('<NuxtLayout name="content" collection="content">')
    expect(contentPage).not.toContain('layout === \'page\'')
    expect(contentConfig).toContain('mergeVariantSchemas([\'content\'], variantSchemas)')
    expect(contentConfig).not.toContain('mergeVariantSchemas([\'page\'], variantSchemas)')
    expect(contentConfig).not.toContain('include: \'page/**/*.{md,yaml}\'')
  })
})
