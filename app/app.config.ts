export default defineAppConfig({
  ui: {
    primary: 'red',
    gray: 'zinc',
    button: {
      variant: {
        solid: 'bg-primary-900 hover:bg-primary-800 disabled:bg-primary-900 focus-visible:outline-primary-800',
      },
    },
    footer: {
      wrapper: 'bg-cool-800 dark:bg-cool-800',
      menu: { background: 'dark:bg-cool-800', option: { active: 'dark:bg-cool-900' } },
      wave: 'fill-cool-800 dark:fill-raisinCool',
      columns: {
        wrapper: 'xl:grid-cols-5',
        center: 'xl:col-span-3',
        right: 'xl:col-span-2',
      },
    },

  },
  links: {
    header: [
      {
        label: 'Über uns',
        icon: 'i-ph-user-duotone',
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
