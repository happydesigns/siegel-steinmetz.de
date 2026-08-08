import { mountSuspended } from '@nuxt/test-utils/runtime'
import { describe, expect, it } from 'vitest'
import AppFooter from '../../app/components/AppFooter.vue'
import Logo from '../../app/components/Logo.vue'

describe('app shell', () => {
  it('renders an accessible, dimensioned brand logo', async () => {
    const wrapper = await mountSuspended(Logo)
    const logo = wrapper.get('img')

    expect(logo.attributes()).toMatchObject({
      alt: 'Bernd Siegel Steingestaltung',
      height: '64',
      src: '/logo.svg',
      width: '247',
    })
  })

  it('offers an accessible color-mode control in the footer', async () => {
    const wrapper = await mountSuspended(AppFooter)
    const controls = wrapper.findAll('button, [role="combobox"]')
    const colorModeControl = controls.find((control) => {
      const accessibleName = [
        control.attributes('aria-label'),
        control.attributes('title'),
      ].filter(Boolean).join(' ')

      return /color|mode|theme|hell|dunkel/i.test(accessibleName)
    })

    expect(wrapper.find('footer').exists()).toBe(true)
    expect(colorModeControl).toBeDefined()
  })
})
