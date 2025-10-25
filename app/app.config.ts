export default defineAppConfig({
  app: {
    meta: {
      copyright: {
        copyrightYear: new Date().getFullYear(),
        copyrightHolder: 'happydesigns',
        copyrightHomepage: 'https://happydesigns.de',
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
          exact: false,
        },
      ],
      footer: [
        {
          label: 'Unternehmen',
          children: [
            {
              label: 'Startseite',
              to: '/',
            },
            {
              label: 'Über uns',
              to: '/ueber-uns',
            },
            {
              label: 'Kontakt',
              to: '/kontakt',
            },
          ],
        },
        {
          label: 'Unsere Leistungen',
          children: [
            {
              label: 'Grabmale',
              to: '/grabmale',
            },
            {
              label: 'Restaurierungen',
              to: '/restaurierungen',
            },
            {
              label: 'Galerie',
              to: '/galerie',
            },
          ],
        },
        {
          label: 'Rechtliches',
          children: [
            {
              label: 'Impressum',
              to: '/impressum',
            },
            {
              label: 'Datenschutz',
              to: '/datenschutz',
            },
          ],
        },
      ],
    },
  },
  ui: {
    colors: {
      primary: 'red',
      neutral: 'zinc',
    },
    footer: {
      slots: {
        root: 'bg-gradient-to-b from-gray-800 to-raisin-cool dark:from-raisin-cool dark:to-raisin',
        top: 'dark border-b border-neutral-700',
        container: 'dark',
      },
    },
    footerColumns: {
      slots: {
        root: 'xl:grid-cols-5',
        center: 'xl:col-span-3',
        right: 'xl:col-span-2',
      },
    },
    contentToc: {
      slots: {
        root: 'lg:backdrop-blur-none',
      },
    },
  },
})
