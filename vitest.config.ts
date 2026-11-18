import { defineVitestProject } from '@nuxt/test-utils/config'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    projects: [
      {
        test: {
          name: 'unit',
          include: ['tests/*.test.ts'],
          environment: 'node',
        },
      },
      await defineVitestProject({
        resolve: {
          dedupe: ['vue', '@vue/runtime-core', '@vue/runtime-dom', '@vue/reactivity', '@vue/shared'],
        },
        test: {
          name: 'nuxt',
          hookTimeout: 60000,
          include: ['tests/nuxt/*.test.ts'],
          environment: 'nuxt',
          environmentOptions: {
            nuxt: {
              overrides: {
                studio: false,
                experimental: { viteEnvironmentApi: false },
              },
            },
          },
          server: {
            deps: {
              inline: [/[/\\]ui[/\\]/, /@vue[+/\\]/],
            },
          },
        },
      }),
    ],
  },
})
