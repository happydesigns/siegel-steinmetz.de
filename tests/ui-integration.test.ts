import { readFileSync } from 'node:fs'
import { describe, expect, it } from 'vitest'

const footer = readFileSync(new URL('../app/components/AppFooter.vue', import.meta.url), 'utf8')
const logo = readFileSync(new URL('../app/components/Logo.vue', import.meta.url), 'utf8')
const logoAsset = readFileSync(new URL('../public/logo.svg', import.meta.url), 'utf8')
const contentPage = readFileSync(new URL('../app/pages/[...slug].vue', import.meta.url), 'utf8')
const contentConfig = readFileSync(new URL('../content.config.ts', import.meta.url), 'utf8')
const galleryPage = readFileSync(new URL('../app/pages/galerie/[...slug].vue', import.meta.url), 'utf8')

describe('shared UI integration', () => {
  it('uses the public prefixed snippet component', () => {
    expect(footer).toContain('<HSnippet path=')
  })

  it('keeps shared shell controls and branding out of the main JavaScript bundle', () => {
    expect(footer).toContain('<UColorModeButton')
    expect(footer).not.toContain('<UColorModeSelect')
    expect(logo).toContain('src="/logo.svg"')
    expect(logo).toContain('alt="Bernd Siegel Steingestaltung"')
    expect(logo).not.toContain('<svg')
    expect(logoAsset).toContain('<svg')
  })

  it('renders the media gallery through the shared content layout without a toc', () => {
    expect(galleryPage).toContain('<NuxtLayout name="content" :path="rootPath" collection="page">')
    expect(galleryPage).toContain('<Gallery :albums="albums" />')
  })

  it('declares the content runtime variant for shared-layout routes', () => {
    expect(contentPage).toContain('variant: \'content\'')
    expect(galleryPage).toContain('variant: \'content\'')
  })

  it('renders all content-backed pages through one collection and layout', () => {
    expect(contentPage).toContain('usePageContent({ collection: \'page\' })')
    expect(contentPage).toContain('<NuxtLayout name="content" collection="page">')
    expect(contentPage).not.toContain('layout === \'page\'')
    expect(contentConfig).toContain('schema: collectionSchemas.content')
    expect(contentConfig).not.toContain('mergeVariantSchemas')
    expect(contentConfig).not.toContain('include: \'page/**/*.{md,yaml}\'')
  })
})
