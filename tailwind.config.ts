import type { Config } from 'tailwindcss'

export default <Partial<Config>> {
  content: [
    'docs/content/**/*.md',
  ],
  theme: {
    extend: {
      colors: {
        red: {
          50: '#ffb8c7',
          100: '#ff8aa3',
          200: '#ff5c7f',
          300: '#ff2e5b',
          400: '#ff053b',
          500: '#db0030',
          600: '#b80028',
          700: '#940020',
          800: '#750019',
          900: '#570013',
          950: '#3d000d',
        },
      },
    },
  },
}
