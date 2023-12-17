import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  transformerDirectives,
} from 'unocss'
import extractorMdc from '@unocss/extractor-mdc'

const preset = presetUno()
preset.theme!.colors = {}

export default defineConfig({
  presets: [
    // preset,
    presetIcons(),
    presetAttributify(),
  ],
  extractors: [
    extractorMdc(),
  ],
  content: {
    filesystem: [
      './content/**/*.md',
    ],
  },
  transformers: [
    transformerDirectives(),
  ],
  theme: {
    colors: {},
  }
})
