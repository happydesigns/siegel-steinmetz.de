import { readFile } from 'node:fs/promises'
import { describe, expect, it } from 'vitest'
import { parse } from 'yaml'

const tocPages = [
  'content/pages/datenschutz.md',
  'content/pages/grabmale.md',
  'content/pages/restaurierungen.md',
  'content/pages/ueber-uns.md',
]

async function readFrontmatter(path: string): Promise<Record<string, unknown>> {
  const content = await readFile(path, 'utf8')
  const frontmatter = content.match(/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/)

  if (!frontmatter) {
    throw new Error(`${path} should contain YAML frontmatter`)
  }

  return parse(frontmatter[1]!) as Record<string, unknown>
}

describe('content configuration', () => {
  it('renders the legal notice with the shared page layout', async () => {
    const frontmatter = await readFrontmatter('content/pages/impressum.md')

    expect(frontmatter.layout).toBe('page')
  })

  it.each(tocPages)('uses the shared root-level toc field in %s', async (path) => {
    const frontmatter = await readFrontmatter(path)

    expect(frontmatter.toc).toBe(true)
  })
})
