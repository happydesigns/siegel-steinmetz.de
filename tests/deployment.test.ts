import { readFileSync } from 'node:fs'
import { describe, expect, it } from 'vitest'

const nuxtConfig = readFileSync(new URL('../nuxt.config.ts', import.meta.url), 'utf8')

describe('deployment configuration', () => {
  it('requires the Studio OAuth credentials in the deployed Worker', () => {
    expect(nuxtConfig).toMatch(
      /secrets:\s*\{\s*required:\s*\[\s*'STUDIO_GITHUB_CLIENT_ID',\s*'STUDIO_GITHUB_CLIENT_SECRET',\s*\]/,
    )
  })
})
