import { readFileSync } from 'node:fs'
import { describe, expect, it } from 'vitest'

const footer = readFileSync(new URL('../app/components/AppFooter.vue', import.meta.url), 'utf8')
const galleryPage = readFileSync(new URL('../app/pages/galerie/[...slug].vue', import.meta.url), 'utf8')

describe('shared UI integration', () => {
  it('uses the public prefixed snippet component', () => {
    expect(footer).toContain('<HSnippet path=')
  })

  it('renders the media gallery through the shared full-width page layout', () => {
    expect(galleryPage).toContain('<NuxtLayout name="page" :path="rootPath">')
    expect(galleryPage).toContain('<Gallery :albums="albums" />')
  })
})
