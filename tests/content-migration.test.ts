import { readFile } from 'node:fs/promises'
import { describe, expect, it } from 'vitest'

const tocPages = [
  'content/pages/datenschutz.md',
  'content/pages/grabmale.md',
  'content/pages/restaurierungen.md',
  'content/pages/ueber-uns.md',
]

describe('content migration', () => {
  it('keeps the legal notice free of a table of contents', async () => {
    const content = await readFile('content/pages/impressum.md', 'utf8')

    expect(content).toMatch(/^toc: false$/m)
  })

  it.each(tocPages)('uses the shared root-level toc field in %s', async (path) => {
    const content = await readFile(path, 'utf8')

    expect(content).toMatch(/^toc: true$/m)
    expect(content).not.toContain('layout:\n  toc:')
  })
})
