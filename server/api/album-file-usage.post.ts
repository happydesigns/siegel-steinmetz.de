import { z } from 'zod'
import { isAlbumFile, usesAlbumFile } from '~~/shared/utils/albumFileUsage'

const usageRequest = z.object({ folder: z.string(), paths: z.array(z.string()).min(1) })
  .refine(({ folder, paths }) => paths.every(src => isAlbumFile(src, folder)))

export default defineEventHandler(async (event) => {
  if (!import.meta.dev || !useRuntimeConfig(event).public.studio?.dev) {
    throw createError({ statusCode: 404 })
  }
  const { folder, paths } = await readValidatedBody(event, usageRequest.parse)
  const storage = useStorage('nuxt_studio_content')
  const keys = (await storage.getKeys()).filter(key => /\.(?:md|ya?ml|json)$/i.test(key))
  if (!keys.length || !keys.includes(`galerie:${folder.slice('assets/gallery/'.length).replaceAll('/', ':')}.yaml`)) {
    throw createError({ statusCode: 409, statusMessage: 'Album source unavailable' })
  }
  const used = new Set<string>()
  for (const key of keys) {
    const raw = await storage.getItemRaw<string | Uint8Array>(key)
    if (raw == null) {
      throw createError({ statusCode: 409, statusMessage: 'Content changed during check' })
    }
    const text = typeof raw === 'string' ? raw : new TextDecoder().decode(raw)
    for (const src of paths) {
      if (usesAlbumFile(text, src)) {
        used.add(src)
      }
    }
  }
  return [...used]
})
