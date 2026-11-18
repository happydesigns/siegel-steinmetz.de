import { afterEach, describe, expect, it, vi } from 'vitest'
import { parse } from 'yaml'
import { useRuntimeConfig } from '#app'
// eslint-disable-next-line antfu/no-import-dist, antfu/no-import-node-modules-by-path -- Exercise the private development adapter changed by our versioned package patch.
import { useStudioHost } from '../../node_modules/nuxt-studio/dist/module/runtime/host.dev.js'

vi.mock('../../node_modules/nuxt-studio/dist/module/runtime/host.js', () => ({
  useStudioHost: () => ({
    meta: {},
    app: {},
    on: {},
    document: {
      db: {
        get: async () => ({ title: 'Old snapshot title', path: '/galerie/fresh' }),
      },
      generate: {
        documentFromContent: async (id: string, content: string) => ({
          id,
          extension: 'yaml',
          meta: {},
          ...parse(content),
        }),
      },
    },
    media: {},
  }),
}))

let restoreRuntimeConfig: (() => void) | undefined
afterEach(() => {
  restoreRuntimeConfig?.()
  vi.unstubAllGlobals()
})

function createLocalHost() {
  const config = useRuntimeConfig()
  const previous = config.public.studio
  config.public.studio = { ...previous, dev: true }
  restoreRuntimeConfig = () => {
    config.public.studio = previous
  }
  return useStudioHost(
    {} as Parameters<typeof useStudioHost>[0],
    {} as Parameters<typeof useStudioHost>[1],
  )
}

describe('local Studio reopening', () => {
  it('reads current file fields while retaining the collection route prefix', async () => {
    const fetchFile = vi.fn().mockResolvedValue('title: Saved title\norder: 998\nimages: []\n')
    vi.stubGlobal('$fetch', fetchFile)
    const host = createLocalHost()

    const document = await host.document.db.get('galerie/fresh.yaml')

    expect(document).toMatchObject({ title: 'Saved title', order: 998, path: '/galerie/fresh' })
    expect(fetchFile).toHaveBeenCalledWith('/__nuxt_studio/dev/content/galerie/fresh.yaml', {
      responseType: 'text',
      headers: { accept: 'application/octet-stream' },
    })
    expect(fetchFile).toHaveBeenCalledTimes(1)
  })

  it('permits missing new files but surfaces other read failures', async () => {
    const fetchFile = vi.fn().mockRejectedValueOnce({ statusCode: 404 }).mockRejectedValueOnce(new Error('read failed'))
    vi.stubGlobal('$fetch', fetchFile)
    const host = createLocalHost()

    await expect(host.document.db.get('galerie/new.yaml')).resolves.toBeUndefined()
    await expect(host.document.db.get('galerie/new.yaml')).rejects.toThrow('read failed')
  })
})
