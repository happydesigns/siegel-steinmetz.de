import { mountSuspended } from '@nuxt/test-utils/runtime'
import { expect, it, vi } from 'vitest'
import SitePhoto from '../../app/components/SitePhoto.vue'

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
