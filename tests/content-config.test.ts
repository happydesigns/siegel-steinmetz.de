import { readFile } from 'node:fs/promises'
import { extname } from 'node:path'
import { describe, expect, it } from 'vitest'
import { parse } from 'yaml'

const tocPages = [
  ['content/pages/datenschutz.md', true],
  ['content/pages/galerie.yaml', false],
  ['content/pages/grabmale.md', true],
  ['content/pages/impressum.md', false],
  ['content/pages/kontakt.md', false],
  ['content/pages/restaurierungen.md', true],
  ['content/pages/ueber-uns.md', true],
] as const

async function readMetadata(path: string): Promise<Record<string, unknown>> {
  const content = await readFile(path, 'utf8')

  if (extname(path) === '.yaml') {
    return parse(content) as Record<string, unknown>
  }

  const frontmatter = content.match(/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/)
  if (!frontmatter) {
    throw new Error(`${path} should contain YAML frontmatter`)
  }

  return parse(frontmatter[1]!) as Record<string, unknown>
}

describe('content configuration', () => {
  it.each(tocPages)('sets the toc behavior explicitly in %s', async (path, toc) => {
    const metadata = await readMetadata(path)

    expect(metadata.toc).toBe(toc)
  })
})
