import type { TreeItem } from 'nuxt-studio/app'
import { isAlbumFile, usesAlbumFile } from '~~/shared/utils/albumFileUsage'

export interface AlbumPhoto {
  src: string
  alt?: string
  caption?: string
  class?: string
}

interface AlbumDocument {
  id: string
  images?: AlbumPhoto[]
  coverImage?: AlbumPhoto | null
}

interface AlbumDraft {
  modified?: AlbumDocument
  original?: AlbumDocument
  conflict?: unknown
  status: string
  version?: number
}

interface StudioAlbumSession {
  getMediaTree: () => TreeItem[]
  documents: {
    get: (path: string) => Promise<AlbumDraft | undefined>
    create: (path: string, value: AlbumDocument, original: AlbumDocument) => Promise<AlbumDraft>
    update: (path: string, value: AlbumDocument) => Promise<AlbumDraft>
  }
  hostDocument: {
    get: (path: string) => Promise<AlbumDocument | undefined>
    list: () => Promise<(AlbumDocument & { fsPath: string })[]>
  }
  hostMedia: { list: () => Promise<{ fsPath: string }[]> }
  media: {
    upload: (folder: string, file: File) => Promise<void>
    remove: (paths: string[]) => Promise<void>
    load: () => Promise<void>
    get: (path: string) => Promise<{ modified?: { path: string }, status: string } | undefined>
  }
  dev: boolean
}

export function studioAlbumSession() {
  let session: StudioAlbumSession | undefined
  window.dispatchEvent(new CustomEvent('siegel:album-editor', {
    detail: { connect: (value: StudioAlbumSession) => {
      session = value
    } },
  }))
  if (!session) {
    throw new Error('Studio lädt noch. Bitte den Albumeditor erneut öffnen.')
  }
  return session as StudioAlbumSession
}

export async function openAlbumDraft(session: StudioAlbumSession, path: string) {
  const existing = await session.documents.get(path)
  if (existing?.conflict || existing?.status === 'deleted') {
    throw new Error('Bitte den Konflikt oder die Löschung zuerst in Studio prüfen.')
  }
  if (existing?.modified && !session.dev) {
    return existing.modified
  }
  const doc = await session.hostDocument.get(path)
  if (!doc) {
    throw new Error('Studio konnte das Album nicht laden.')
  }
  if (!existing) {
    await session.documents.create(path, doc, doc)
  }
  return doc
}

export const photoTypes: Record<string, string> = {
  jpg: 'image/jpeg',
  jpeg: 'image/jpeg',
  png: 'image/png',
  webp: 'image/webp',
  avif: 'image/avif',
}

export function checkPhoto(file: File) {
  const ext = file.name.split('.').pop()?.toLowerCase() ?? ''
  if (!Object.hasOwn(photoTypes, ext) || (file.type && file.type !== photoTypes[ext])) {
    throw new Error(`${file.name}: Bitte JPG, PNG, WebP oder AVIF wählen.`)
  }
  if (!file.size || file.size > 10 * 1024 * 1024) {
    throw new Error(`${file.name}: Erlaubt sind Bilder bis 10 MB.`)
  }
  return ext
}

export async function uploadAlbumPhoto(session: StudioAlbumSession, folder: string, file: File, paths: Set<string>) {
  const ext = checkPhoto(file)
  const stem = file.name.slice(0, -(ext.length + 1)).normalize('NFKD').replace(/[\u0300-\u036F]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'foto'
  let name = `${stem}.${ext}`
  for (let n = 2; paths.has(`/${folder}/${name}`); n++) {
    name = `${stem}-${n}.${ext}`
  }
  await session.media.upload(folder, new File([file], name, { type: photoTypes[ext] }))
  const uploaded = await session.media.get(`${folder}/${name}`)
  if (!uploaded?.modified || uploaded.status !== (session.dev ? 'pristine' : 'created')) {
    throw new Error(`${file.name} konnte nicht hinzugefügt werden.`)
  }
  paths.add(uploaded.modified.path)
  return uploaded.modified.path
}

export function albumSnapshot(doc: AlbumDocument) {
  return JSON.stringify([doc.images ?? [], doc.coverImage ?? null])
}

export async function deleteUnusedAlbumFiles(session: StudioAlbumSession, folder: string, paths: string[]) {
  if (!paths.every(src => isAlbumFile(src, folder))) {
    throw new Error('Die Datei gehört nicht zum Albumordner.')
  }
  let used: string[]
  if (session.dev) {
    // Newly created local documents can be missing from Studio's browser index.
    used = await $fetch<string[]>('/api/album-file-usage', { method: 'POST', body: { folder, paths } })
    if (!Array.isArray(used) || !used.every(src => paths.includes(src))) {
      throw new Error('Die Verwendung der Datei konnte nicht geprüft werden.')
    }
  }
  else {
    const documents = await session.hostDocument.list()
    const albumPath = `${folder.replace(/^assets\/gallery\//, 'galerie/')}.yaml`
    if (!documents.some(doc => doc.fsPath === albumPath)) {
      throw new Error('Die Verwendung der Datei konnte nicht geprüft werden.')
    }
    const content = documents.map(doc => JSON.stringify(doc))
    used = paths.filter(src => content.some(text => usesAlbumFile(text, src)))
  }
  const mediaFiles = await session.hostMedia.list()
  for (const src of paths) {
    if (used.includes(src)) {
      continue
    }
    const fsPath = src.slice(1)
    const media = mediaFiles.find(item => item.fsPath.replace(/^\/+/, '') === fsPath)
    if (media) {
      const draft = await session.media.get(fsPath)
      await session.media.remove([draft ? fsPath : media.fsPath])
    }
  }
  // Local removals write to disk, but Studio 1.7 can retain the old upload
  // in memory, preventing a later upload under the same filename.
  if (session.dev && paths.some(src => !used.includes(src))) {
    await session.media.load()
  }
  return used.map(src => src.slice(src.lastIndexOf('/') + 1))
}
