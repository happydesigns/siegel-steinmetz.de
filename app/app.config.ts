export default defineAppConfig({
  ui: {
    colors: {
      primary: 'red',
      neutral: 'zinc',
    },
    button: {
      variant: {
        solid: 'bg-primary-900 hover:bg-primary-800 disabled:bg-primary-900 focus-visible:outline-primary-800',
      },
    },
  },
  uiPro: {
    footer: {
      slots: {
        root: 'bg-gradient-to-b from-gray-800 to-raisin-cool dark:raisin-cool',
        container: 'dark',
        top: 'dark border-b border-neutral-200 dark:border-gray-700',
        wave: 'bg-gray-800 dark:bg-raisin-cool fill-white dark:fill-neutral-900',
      },
    },
    footerColumns: {
      slots: {
        root: 'xl:grid-cols-5',
        center: 'xl:col-span-3',
        right: 'xl:col-span-2',
      },
    },
  },
  links: {
    header: [
      {
        label: 'Über uns',
        icon: 'i-ph-users-duotone',
        to: '/ueber-uns',
      },
      {
        label: 'Grabmale',
        description: 'Ein sichtbares und individuelles Andenken an einen geliebten Menschen.',
        icon: 'i-ph-cross-duotone',
        to: '/grabmale',
      },
      {
        label: 'Restaurierungen',
        description: 'Fachgemäße Restaurierung von historischen Gebäuden, Baudenkmalen und Bildhauerarbeiten.',
        icon: 'i-ph-bank-duotone',
        to: '/restaurierungen',
      },
      {
        label: 'Galerie',
        icon: 'i-ph-image-duotone',
        to: '/galerie',
      },
    ],
    footer: [{
      label: 'Unternehmen',
      children: [{
        label: 'Startseite',
        to: '/',
      }, {
        label: 'Über uns',
        to: '/ueber-uns',
      }, {
        label: 'Kontakt',
        to: '/kontakt',
      }],
    }, {
      label: 'Unsere Leistungen',
      children: [{
        label: 'Grabmale',
        to: '/grabmale',
      }, {
        label: 'Restaurierungen',
        to: '/restaurierungen',
      }, {
        label: 'Galerie',
        to: '/galerie',
      }],
    }, {
      label: 'Rechtliches',
      children: [{
        label: 'Impressum',
        to: '/impressum',
      }, {
        label: 'Datenschutz',
        to: '/datenschutz',
      }],
    }],
  },
})
