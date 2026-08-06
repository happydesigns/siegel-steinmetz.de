import { readdir, readFile } from 'node:fs/promises'
import { createRequire } from 'node:module'
import { dirname, extname, join, relative, resolve } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { describe, expect, it } from 'vitest'
import { parse as parseYaml } from 'yaml'

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

function parseMetadata(path: string, source: string): Record<string, unknown> {
  if (extname(path) === '.json') {
    return JSON.parse(source) as Record<string, unknown>
  }

  if (extname(path) === '.md') {
    const frontmatter = source.match(/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/)

    if (!frontmatter?.[1]) {
      throw new Error(`${path} should contain YAML frontmatter`)
    }

    return parseYaml(frontmatter[1]) as Record<string, unknown>
  }

  return parseYaml(source) as Record<string, unknown>
}

function expectedMetadataOrder(metadata: Record<string, unknown>): string[] {
  return Object.keys(metadata).sort((left, right) => {
    if (left === 'title') {
      return -1
    }
    if (right === 'title') {
      return 1
    }
    return left.localeCompare(right, 'en')
  })
}

const contentFiles = await findContentFiles(contentRoot)
const studioGenerator = await loadStudioGenerator()

describe('studio content formatting', () => {
  it.each(contentFiles)('keeps title first and remaining metadata alphabetical in %s', async (path) => {
    const metadata = parseMetadata(path, await readFile(path, 'utf8'))
    const actualOrder = Object.keys(metadata)

    expect(actualOrder[0]).toBe('title')
    expect(actualOrder).toEqual(expectedMetadataOrder(metadata))
  })

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
