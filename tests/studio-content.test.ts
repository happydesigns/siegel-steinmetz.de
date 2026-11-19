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
  contentFromDocument: (document: StudioDocument) => Promise<string | null>
  documentFromContent: (
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

async function loadStudioDocumentModule(file: 'generate' | 'compare') {
  const studioEntry = createRequire(import.meta.url).resolve('nuxt-studio')
  const url = pathToFileURL(resolve(dirname(studioEntry), `runtime/utils/document/${file}.js`)).href
  return await import(/* @vite-ignore */ url)
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
const studioGenerator: StudioDocumentGenerator = await loadStudioDocumentModule('generate')
const { areDocumentsEqual } = await loadStudioDocumentModule('compare') as {
  areDocumentsEqual: (original: StudioDocument, draft: StudioDocument) => Promise<boolean>
}

describe('visual Markdown drafts', () => {
  const image = ['img', { src: '/stein.jpg', alt: 'Grabstein' }]
  const original = {
    id: 'pages/grabmale.md',
    extension: 'md',
    title: 'Grabmale',
    body: { type: 'minimark', value: [['div', { className: ['mx-auto'] }, ['p', {}, image]]] },
  }
  const draft = {
    ...original,
    body: { type: 'minimark', value: [['div', { class: 'mx-auto' }, image]] },
  }

  it('keeps equivalent visual-editor markup clean', async () => {
    expect(await areDocumentsEqual(original, draft)).toBe(true)
  })

  it('detects a changed image, new text, and added frontmatter', async () => {
    for (const edit of [
      { ...draft, body: { type: 'minimark', value: [['div', { class: 'mx-auto' }, ['img', { src: '/neu.jpg', alt: 'Grabstein' }]]] } },
      { ...draft, body: { ...draft.body, value: [...draft.body.value, ['p', {}, 'Neuer Absatz']] } },
      { ...draft, description: 'Neue Beschreibung' },
    ]) {
      expect(await areDocumentsEqual(original, edit)).toBe(false)
    }
    expect(await areDocumentsEqual(original, draft)).toBe(true)
  })
})

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
    const document = await studioGenerator.documentFromContent(id, source, {
      collectionType: 'page',
      compress: false,
    })

    expect(source.charCodeAt(0)).not.toBe(0xFEFF)

    if (!document) {
      throw new Error(`Nuxt Studio could not parse ${path}`)
    }

    const generated = await studioGenerator.contentFromDocument(document)

    expect(generated?.replaceAll('\r\n', '\n')).toBe(source)
  })
})
