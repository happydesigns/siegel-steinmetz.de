import { mountSuspended } from '@nuxt/test-utils/runtime'
import { expect, it, vi } from 'vitest'
import SitePhoto from '../../app/components/SitePhoto.vue'

it('offers AVIF and retries a failed gallery thumbnail in WebP before using the original', async () => {
  const src = '/assets/tombstones/tombstones-001.jpg'
  using _pending = vi.spyOn(HTMLImageElement.prototype, 'complete', 'get').mockReturnValue(false)
  using selected = vi.spyOn(HTMLImageElement.prototype, 'currentSrc', 'get')
  const wrapper = await mountSuspended(SitePhoto, { props: { src, galleryThumbnail: true } })
  const img = wrapper.get('img')
  const source = wrapper.get('picture > source[type="image/avif"]')
  expect(source.attributes('srcset')).toContain('f_avif')
  expect(source.attributes('sizes')).toBe(img.attributes('sizes'))
  selected.mockReturnValue(source.attributes('srcset')!.split(' ')[0]!)
  await img.trigger('error')
  expect(wrapper.find('source').exists()).toBe(false)
  expect(img.attributes('srcset')).toContain('f_webp')
  await img.trigger('error')
  expect(img.attributes('src')).toBe(src)
  expect(img.attributes('srcset')).toBeUndefined()
  wrapper.unmount()
})

it('keeps the reserved dimensions when a missing image variant falls back to the original', async () => {
  const src = '/assets/tombstones/tombstones-001.jpg'
  // Keep the request pending until this test dispatches the network error.
  using _pending = vi.spyOn(HTMLImageElement.prototype, 'complete', 'get').mockReturnValue(false)
  const wrapper = await mountSuspended(SitePhoto, { props: { src, loading: 'lazy' } })
  const img = wrapper.get('img')
  const { width, height } = img.attributes()
  expect(Number(width)).toBeGreaterThan(0)
  expect(Number(height)).toBeGreaterThan(0)
  expect(img.attributes('srcset')).toBeTruthy()
  await img.trigger('error')
  expect(img.attributes()).toMatchObject({ src, width, height })
  expect(img.attributes('srcset')).toBeUndefined()
  wrapper.unmount()
})

it('marks a newly mounted gallery photo as lazy before assigning its image candidates', async () => {
  const loadingAtAssignment: string[] = []
  const prototype = HTMLImageElement.prototype
  const setSrcset = Object.getOwnPropertyDescriptor(prototype, 'srcset')!.set!
  const spy = vi.spyOn(prototype, 'srcset', 'set').mockImplementation(function (this: HTMLImageElement, value: string) {
    loadingAtAssignment.push(this.loading)
    setSrcset.call(this, value)
  })
  try {
    const wrapper = await mountSuspended(SitePhoto, {
      props: { src: '/assets/tombstones/tombstones-001.jpg', loading: 'lazy' },
    })
    wrapper.unmount()
    expect(loadingAtAssignment[0]).toBe('lazy')
  }
  finally {
    spy.mockRestore()
  }
})
