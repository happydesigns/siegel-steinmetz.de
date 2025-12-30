import { defineCollection, defineContentConfig } from '@nuxt/content'
import { z } from 'zod/v4'

const variantEnum = z.enum(['solid', 'outline', 'subtle', 'soft', 'ghost', 'link'])
const colorEnum = z.enum(['primary', 'secondary', 'neutral', 'error', 'warning', 'success', 'info'])
const sizeEnum = z.enum(['xs', 'sm', 'md', 'lg', 'xl'])
const orientationEnum = z.enum(['vertical', 'horizontal'])
const targetEnum = z.enum(['_blank', '_parent', '_self', '_top'])

const as = z.any().optional()
const title = z.string().optional()
const description = z.string().optional()
const icon = property(z.string()).editor({ input: 'icon' })
const orientation = orientationEnum.optional()
const label = z.string().nonempty()
const to = z.string().nonempty()
const headline = z.string().optional()
const size = sizeEnum.optional()
const trailing = z.boolean().optional()
const target = z.union([targetEnum, z.string()]).optional()
const color = colorEnum.optional()
const variant = variantEnum.optional()
const reverse = z.boolean().optional()
const links = z.array(createLinkSchema()).optional()
const features = z.array(createFeatureItemSchema())

function createBaseSchema() {
  return z.object({
    title,
    description,
  })
}

function createFeatureItemSchema() {
  return createBaseSchema().extend({
    icon,
  })
}

function createLinkSchema() {
  return z.object({
    label,
    to,
    icon,
    size,
    trailing,
    target,
    color,
    variant,
  }).optional()
}

export const imageSchema = z.object({
  src: z.string(),
  alt: z.string().optional(),
  class: z.string().optional(),
})

export const pageSectionSchema = createBaseSchema().extend({
  as,
  headline,
  icon,
  links,
  features,
  orientation,
  reverse,
  ui: z.object({
    root: z.string().optional(),
    container: z.string().optional(),
    wrapper: z.string().optional(),
    headline: z.string().optional(),
    leading: z.string().optional(),
    leadingIcon: z.string().optional(),
    title: z.string().optional(),
    description: z.string().optional(),
    links: z.string().optional(),
    features: z.string().optional(),
  }).optional(),
})

const pageHeroSchema = createBaseSchema().extend({
  as,
  headline,
  links: links.optional(),
  orientation,
  reverse,
  ui: z.object({
    root: z.string().optional(),
    container: z.string().optional(),
    wrapper: z.string().optional(),
    headline: z.string().optional(),
    title: z.string().optional(),
    description: z.string().optional(),
    links: z.string().optional(),
  }).optional(),
}).optional()

const pageHeaderSchema = createBaseSchema().extend({
  as,
  headline,
  links,
  ui: z.object({
    root: z.string().optional(),
    container: z.string().optional(),
    wrapper: z.string().optional(),
    headline: z.string().optional(),
    title: z.string().optional(),
    description: z.string().optional(),
    links: z.string().optional(),
  }).optional(),
})

const albumImageSchema = z.object({
  src: z.string(),
  alt: z.string().optional(),
  caption: z.string().optional(),
})

const albumSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  coverImage: albumImageSchema.optional(),
  order: z.number().optional(),
  images: z.array(albumImageSchema),
})

export default defineContentConfig({
  collections: {
    landing: defineCollection({
      type: 'page',
      source: 'index.yaml',
      schema: z.object({
        hero: pageSectionSchema.extend({
          image: imageSchema.optional(),
        }),
        sections: z.array(
          pageSectionSchema.extend({
            image: imageSchema.optional(),
          }),
        ),
      }),
    }),
    albums: defineCollection({
      type: 'page',
      source: 'galerie/**/*.yaml',
      schema: albumSchema,
    }),
    page: defineCollection({
      type: 'page',
      source: {
        include: 'pages/**/*.{md,yaml}',
        prefix: '/',
      },
      schema: z.object({
        layout: z.object({
          metadataComponent: z.enum(['none', 'header', 'hero']).default('header'),
          container: z.boolean().optional(),
          toc: z.boolean().optional(),
          prose: z.boolean().optional(),
        }).optional(),
        hero: pageHeroSchema.optional(),
        header: pageHeaderSchema.optional(),
        ui: z.object({
          main: z.any().optional(),
          container: z.any().optional(),
          page: z.any().optional(),
          body: z.any().optional(),
          toc: z.any().optional(),
          footer: z.any().optional(),
        }).optional(),
      }),
    }),
    snippet: defineCollection({
      type: 'page',
      source: 'snippets/**/*.{md,yaml}',
    }),
  },
})
