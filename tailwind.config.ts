import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  content: [
    'docs/content/**/*.md',
  ],
  theme: {
    extend: {
      // https://uicolors.app/create
      colors: {
        red: {
          50: '#ffeef2',
          100: '#ffdae2',
          200: '#ffbbc9',
          300: '#ff8ba3',
          400: '#ff496f',
          500: '#ff1143',
          600: '#ff0036',
          700: '#e70031',
          800: '#be0028',
          900: '#770019',
          950: '#560012',
        },
      },
    },
  },
}
