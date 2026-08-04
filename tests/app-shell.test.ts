import { readFileSync } from 'node:fs'
import { describe, expect, it } from 'vitest'

const app = readFileSync(new URL('../app/app.vue', import.meta.url), 'utf8')
const nuxtConfig = readFileSync(new URL('../nuxt.config.ts', import.meta.url), 'utf8')
const footer = readFileSync(new URL('../app/components/AppFooter.vue', import.meta.url), 'utf8')
const galleryPage = readFileSync(new URL('../app/pages/galerie/[...slug].vue', import.meta.url), 'utf8')

describe('application shell', () => {
  it('configures German as the site locale', () => {
    expect(nuxtConfig).toContain(`defaultLocale: 'de'`)
  })

  it('composes the project-owned header and footer around the page', () => {
    expect(app).toContain('<UApp :locale="de">')
    expect(app).toContain('<AppHeader />')
    expect(app).toContain('<UMain>')
    expect(app).toContain('<AppFooter />')
  })

  it('uses the public prefixed snippet component', () => {
    expect(footer).toContain('<HSnippet path=')
    expect(footer).not.toContain('<Snippet path=')
  })

  it('does not keep obsolete Vite dependency optimization overrides', () => {
    expect(nuxtConfig).not.toContain('optimizeDeps')
    expect(nuxtConfig).not.toContain('fast-deep-equal')
  })

  it('does not introduce content search', () => {
    expect(app).not.toContain('<HContentSearch')
  })

  it('renders the media gallery at the full container width', () => {
    expect(galleryPage).toContain('<UContainer v-if="page">')
    expect(galleryPage).toContain('<UPageHeader v-if="header"')
    expect(galleryPage).toContain('<Gallery :albums="albums" />')
    expect(galleryPage).not.toContain('name="content"')
  })
})
