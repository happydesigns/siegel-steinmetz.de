import { describe, expect, it } from 'vitest'
import { isAlbumFile, usesAlbumFile } from '../shared/utils/albumFileUsage'

const folder = 'assets/gallery/grabmallager'
const photo = `/${folder}/stein.jpg`

describe('album file removal', () => {
  it('only allows a direct image file in the chosen album folder', () => {
    expect(isAlbumFile(photo, folder)).toBe(true)
    for (const src of ['/assets/logo.jpg', `/${folder}/../stein.jpg`, `/${folder}/%2e%2e%2fstein.jpg`, `/${folder}/album.yaml`]) {
      expect(isAlbumFile(src, folder)).toBe(false)
    }
  })

  it.each([
    `coverImage:\n  src: ${photo}`,
    `![Stein](${photo}?width=200)`,
    './stein.jpg',
    `/${folder}/%73tein.jpg`,
    '/assets/gallery/anderes/../grabmallager/stein.jpg',
  ])('preserves a referenced image in %s', (source) => {
    expect(usesAlbumFile(source, photo)).toBe(true)
  })

  it('distinguishes files with the same name in different album folders', () => {
    expect(usesAlbumFile('src: /assets/gallery/referenzen/stein.jpg', photo)).toBe(false)
  })
})
