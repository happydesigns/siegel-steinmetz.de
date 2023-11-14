import { createSharedComposable } from '@vueuse/core'

const _useNavigation = () => {
  const route = useRoute()

  const headerLinks = computed(() => [{
    label: 'Unsere Leistungen',
    icon: 'i-game-icons:briefcase',
    to: '/leistungen',
    children: [{
      label: 'Restaurierungen',
      description: 'Fachgemäße Restaurierung von historischen Gebäuden, Baudenkmalen und Bildhauerarbeiten.',
      icon: 'game-icons:ancient-ruins',
      to: '/restaurierungen',
      active: route.path.startsWith('/restaurierungen')
    }, {
      label: 'Grabmale',
      description: 'Ein sichtbares und individuelles Andenken an einen geliebten Menschen.',
      icon: 'i-game-icons-tombstone',
      to: '/docs/guide',
      active: route.path.startsWith('/grabmale')
    }]
  }, {
    label: 'Über uns',
    icon: 'i-game-icons-person',
    to: '/ueber-uns'
  }, {
    label: 'Kontakt',
    icon: 'i-game-icons-rotary-phone',
    to: 'https://nuxt.new',
    target: '_blank'
  }])

  const footerLinks = [{
    label: 'Community',
    children: [{
      label: 'Nuxters',
      to: 'https://nuxters.nuxt.com',
      target: '_blank'
    }, {
      label: 'Video Courses',
      to: 'https://masteringnuxt.com/nuxt3?ref=nuxt',
      target: '_blank'
    }, {
      label: 'Nuxt on GitHub',
      to: 'https://github.com/nuxt',
      target: '_blank'
    }, {
      label: 'Design Kit',
      to: '/design-kit'
    }]
  }, {
    label: 'Enterprise',
    children: [{
      label: 'Support',
      to: '/enterprise/support'
    }, {
      label: 'Agencies',
      to: '/enterprise/agencies'
    }, {
      label: 'Jobs',
      to: '/enterprise/jobs'
    }, {
      label: 'Sponsors',
      to: '/enterprise/sponsors'
    }]
  }, {
    label: 'Solutions',
    children: [{
      label: 'Nuxt Content',
      to: 'https://content.nuxt.com/',
      target: '_blank'
    }, {
      label: 'Nuxt DevTools',
      to: 'https://devtools.nuxt.com/',
      target: '_blank'
    }, {
      label: 'Nuxt Image',
      to: 'https://image.nuxt.com/',
      target: '_blank'
    }, {
      label: 'Nuxt UI',
      to: 'https://ui.nuxt.com/',
      target: '_blank'
    }]
  }]

  const searchLinks = computed(() => [...headerLinks.value.map(link => {
    // Remove `/docs` and `/enterprise` links from command palette
    if (['/docs', '/enterprise'].includes(link.to)) {
      return {
        label: link.label,
        icon: link.icon,
        children: link.children
      }
    }

    return link
  }).filter(Boolean), {
    label: 'Design Kit',
    icon: 'i-ph-palette-duotone',
    to: '/design-kit'
  }, {
    label: 'Newsletter',
    icon: 'i-ph-envelope-simple-duotone',
    to: '/newsletter'
  }])

  const searchGroups = [{
    key: 'articles-search',
    label: 'Articles',
    search: async (q: any) => {
      if (!q) {
        return []
      }

      const { articles, fetchList } = useBlog()
      if (!articles.value.length) {
        await fetchList()
      }

      return articles.value
        .filter(article => article.title?.search(searchTextRegExp(q)) !== -1)
        .map(article => ({
          id: `article-${article._path}`,
          label: article.title,
          suffix: article.description,
          icon: 'i-ph-newspaper',
          to: article._path
        }))
    }
  }]

  return {
    headerLinks,
    footerLinks,
    searchLinks,
    searchGroups
  }
}

export const useNavigation = createSharedComposable(_useNavigation)
