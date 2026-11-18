import { mockNuxtImport, mountSuspended } from '@nuxt/test-utils/runtime'
import { flushPromises } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'
import { defineComponent, h, nextTick, ref } from 'vue'
import { useAlbum } from '../../app/composables/useAlbum'

const { requestedPaths } = vi.hoisted(() => ({ requestedPaths: [] as string[] }))

mockNuxtImport('queryCollection', () => () => ({
  path: (path: string) => ({
    first: async () => {
      requestedPaths.push(path)
      return { title: path, images: [{ src: `${path}.jpg` }] }
    },
  }),
}))

describe('album navigation', () => {
  it('loads the new album when the route path changes without remounting', async () => {
    const path = ref('/galerie/first')
    const wrapper = await mountSuspended(defineComponent({
      async setup() {
        const { data } = await useAlbum(() => path.value)
        return () => h('p', data.value?.images[0]?.src)
      },
    }))

    expect(wrapper.text()).toBe('/galerie/first.jpg')
    path.value = '/galerie/second'
    await nextTick()
    await flushPromises()
    expect(wrapper.text()).toBe('/galerie/second.jpg')
    expect(requestedPaths).toEqual(['/galerie/first', '/galerie/second'])
    wrapper.unmount()
  })
})
