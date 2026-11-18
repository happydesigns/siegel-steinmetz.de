import { readdir, readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { imageMeta } from 'image-meta'
import { addTemplate, defineNuxtModule } from 'nuxt/kit'

export default defineNuxtModule({
  setup(_, nuxt) {
    const directory = join(nuxt.options.rootDir, 'public/assets')
    addTemplate({
      filename: 'photo-dimensions.json',
      write: true,
      async getContents() {
        const dimensions: Record<string, [number, number]> = {}
        for (const file of await readdir(directory, { recursive: true })) {
          if (!/\.(?:avif|jpe?g|png|webp)$/i.test(file)) {
            continue
          }
          const { width, height, orientation } = imageMeta(await readFile(join(directory, file)))
          const src = `/assets/${file.replaceAll('\\', '/')}`
          dimensions[src] = orientation && orientation >= 5 ? [height, width] : [width, height]
        }
        return JSON.stringify(dimensions)
      },
    })
  },
})
