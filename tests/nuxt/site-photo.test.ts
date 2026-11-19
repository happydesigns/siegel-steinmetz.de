import { mountSuspended } from '@nuxt/test-utils/runtime'
import { expect, it, vi } from 'vitest'
import SitePhoto from '../../app/components/SitePhoto.vue'

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
