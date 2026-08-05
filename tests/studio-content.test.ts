import { readdir, readFile } from 'node:fs/promises'
import { createRequire } from 'node:module'
import { dirname, extname, join, relative, resolve } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { describe, expect, it } from 'vitest'

interface StudioDocument extends Record<string, unknown> {
  id: string
}

interface StudioDocumentGenerator {
  generateContentFromDocument: (document: StudioDocument) => Promise<string | null>
  generateDocumentFromContent: (
    id: string,
    content: string,
    options: { collectionType: 'page', compress: false },
  ) => Promise<StudioDocument | null>
}

const contentRoot = fileURLToPath(new URL('../content/', import.meta.url))
const contentExtensions = new Set(['.json', '.md', '.yaml', '.yml'])

async function findContentFiles(directory: string): Promise<string[]> {
  const entries = await readdir(directory, { withFileTypes: true })
  const files = await Promise.all(entries.map(async (entry) => {
    const path = join(directory, entry.name)

    if (entry.isDirectory()) {
      return findContentFiles(path)
    }

    return contentExtensions.has(extname(entry.name)) ? [path] : []
  }))

  return files.flat().sort()
}

async function loadStudioGenerator(): Promise<StudioDocumentGenerator> {
  const require = createRequire(import.meta.url)
  const studioEntry = require.resolve('nuxt-studio')
  const generatorUrl = pathToFileURL(resolve(
    dirname(studioEntry),
    'runtime/utils/document/generate.js',
  )).href

  return await import(/* @vite-ignore */ generatorUrl) as StudioDocumentGenerator
}

const contentFiles = await findContentFiles(contentRoot)
const studioGenerator = await loadStudioGenerator()

describe('studio content formatting', () => {
  it.each(contentFiles)('roundtrips %s without formatting changes', async (path) => {
    const source = (await readFile(path, 'utf8')).replaceAll('\r\n', '\n')
    const id = relative(contentRoot, path).replaceAll('\\', '/')
    const document = await studioGenerator.generateDocumentFromContent(id, source, {
      collectionType: 'page',
      compress: false,
    })

    expect(source.charCodeAt(0)).not.toBe(0xFEFF)

    if (!document) {
      throw new Error(`Nuxt Studio could not parse ${path}`)
    }

    const generated = await studioGenerator.generateContentFromDocument(document)

    expect(generated?.replaceAll('\r\n', '\n')).toBe(source)
  })
})
