import { readdirSync, readFileSync } from 'node:fs'
import { extname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { describe, expect, it } from 'vitest'

const projectRoot = fileURLToPath(new URL('..', import.meta.url))
const appDirectory = join(projectRoot, 'app')
const mainStylesPath = join(appDirectory, 'assets/css/main.css')
const mainStyles = readFileSync(mainStylesPath, 'utf8')
const nuxtConfig = readFileSync(join(projectRoot, 'nuxt.config.ts'), 'utf8')
const packageJson = JSON.parse(readFileSync(join(projectRoot, 'package.json'), 'utf8'))

function collectStyleSources(directory: string): string[] {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name)

    if (entry.isDirectory()) {
      return collectStyleSources(path)
    }

    return ['.css', '.vue'].includes(extname(entry.name)) ? [path] : []
  })
}

describe('stylesheet integration', () => {
  it('uses one application-owned Tailwind entry point', () => {
    expect(nuxtConfig).toContain('css: [\'~/assets/css/main.css\']')
    expect(mainStyles.split(/\r?\n/).slice(0, 3)).toEqual([
      '@import "tailwindcss";',
      '@import "@nuxt/ui";',
      '@import "@happydesigns/ui/styles.css";',
    ])
    expect(packageJson.dependencies.tailwindcss).toBe('catalog:nuxt')
  })

  it('does not start another Tailwind compiler in app styles', () => {
    const duplicateImports = collectStyleSources(appDirectory)
      .filter(path => path !== mainStylesPath)
      .flatMap(path => readFileSync(path, 'utf8').match(/@import\s+["'](?:tailwindcss|@nuxt\/ui)["']/g) ?? [])

    expect(duplicateImports).toEqual([])
  })
})
