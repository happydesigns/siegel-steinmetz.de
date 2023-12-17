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
          50: '#fef1f1',
          100: '#fee6e6',
          200: '#fccfd1',
          300: '#f9a9aa',
          400: '#f4767c',
          500: '#eb4752',
          600: '#d7283c',
          700: '#b71a32',
          800: '#9a1931',
          900: '#631324',
          950: '#490815',
        },
      },
    },
  },
}
