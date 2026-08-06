import { readFileSync } from 'node:fs'
import { describe, expect, it } from 'vitest'

const nuxtConfig = readFileSync(new URL('../nuxt.config.ts', import.meta.url), 'utf8')

describe('deployment configuration', () => {
  it('requires runtime secrets in the deployed Worker', () => {
    const requiredBlock = nuxtConfig.match(/secrets:\s*\{\s*required:\s*\[([^\]]+)\]/)?.[1]
    const requiredSecrets = [...(requiredBlock?.matchAll(/'([^']+)'/g) ?? [])]
      .map(match => match[1])

    expect(requiredSecrets).toEqual([
      'NUXT_SCRIPTS_PROXY_SECRET',
      'STUDIO_GITHUB_CLIENT_ID',
      'STUDIO_GITHUB_CLIENT_SECRET',
    ])
  })
})
