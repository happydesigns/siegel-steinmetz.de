import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default <Partial<Config>> {
  content: ['./content/**/*.{md,json,yaml,yml,csv}'],
  theme: {
    extend: {
      // https://uicolors.app/create
      colors: {
        background: 'rgb(var(--ui-background) / <alpha-value>)',
        foreground: 'rgb(var(--ui-foreground) / <alpha-value>)',
        red: {
          50: '#fef1f4',
          100: '#fcdee5',
          200: '#fac2cd',
          300: '#f693a7',
          400: '#f05678',
          500: '#ec224e',
          600: '#eb1443',
          700: '#d3123c',
          800: '#ae0f31',
          900: '#750019',
          950: '#570013',
        },
        raisin: '#1d1f25',
      },
      fontFamily: {
        sans: ['Lato', ...defaultTheme.fontFamily.sans],
        serif: ['Lora', ...defaultTheme.fontFamily.serif],
      },
    },
  },
  safelist: [
    'bg-cool-800',
    'dark:bg-cool-800',
    'dark:bg-cool-900',
    'fill-cool-800',
    'dark:fill-cool-800',
    'xl:grid-cols-5',
    'xl:col-span-3',
    'xl:col-span-2',
  ],
}
