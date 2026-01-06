import { defineCollection, defineContentConfig } from '@nuxt/content'
import { z } from 'zod/v4'

// -----------------------------------------------------------------------------
// Constants
// -----------------------------------------------------------------------------
const variantEnum = z.enum(['solid', 'outline', 'subtle', 'soft', 'ghost', 'link'])
const colorEnum = z.enum(['primary', 'secondary', 'neutral', 'error', 'warning', 'success', 'info'])
const sizeEnum = z.enum(['xs', 'sm', 'md', 'lg', 'xl'])
const orientationEnum = z.enum(['vertical', 'horizontal'])
const targetEnum = z.enum(['_blank', '_parent', '_self', '_top'])

// -----------------------------------------------------------------------------
// Sub-Schemas
// -----------------------------------------------------------------------------
const imageSchema = z.object({
  src: z.string(),
  alt: z.string().optional(),
  class: z.string().optional(),
})

const linkSchema = z.object({
  label: z.string().nonempty(),
  to: z.string().nonempty(),
  icon: z.string().optional(),
  size: sizeEnum.optional(),
  trailing: z.boolean().optional(),
  target: z.union([targetEnum, z.string()]).optional(),
  color: colorEnum.optional(),
  variant: variantEnum.optional(),
})

const baseSchema = z.object({
  title: z.string().optional(),
  description: z.string().optional(),
  ui: z.record(z.string(), z.any()).optional(),
})

const featureItemSchema = baseSchema.extend({
  icon: z.string().optional(),
})

// -----------------------------------------------------------------------------
// Section Schemas
// -----------------------------------------------------------------------------
const pageSectionSchema = baseSchema.extend({
  as: z.string().optional(),
  headline: z.string().optional(),
  icon: z.string().optional(),
  orientation: orientationEnum.optional(),
  reverse: z.boolean().optional(),
  image: imageSchema.optional(),
  links: z.array(linkSchema).optional(),
  features: z.array(featureItemSchema).optional(),
})

const pageHeroSchema = pageSectionSchema.pick({
  title: true,
  description: true,
  headline: true,
  links: true,
  orientation: true,
  reverse: true,
  ui: true,
  image: true,
}).extend({})

const pageHeaderSchema = baseSchema.extend({
  headline: z.string().optional(),
  links: z.array(linkSchema).optional(),
})

// -----------------------------------------------------------------------------
// Content Types
// -----------------------------------------------------------------------------
const albumImageSchema = z.object({
  src: z.string(),
  alt: z.string().optional(),
  caption: z.string().optional(),
})

const albumSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  coverImage: albumImageSchema.optional(),
  order: z.number().default(0),
  images: z.array(albumImageSchema),
})

const landingSchema = z.object({
  hero: pageSectionSchema.extend({ image: imageSchema.optional() }).optional(),
  sections: z.array(pageSectionSchema.extend({ image: imageSchema.optional() })),
})

const pageSchema = z.object({
  layout: z.object({
    metadataComponent: z.enum(['none', 'header', 'hero']).default('header'),
    container: z.boolean().optional(),
    toc: z.boolean().optional(),
    prose: z.boolean().optional(),
  }).optional(),
  hero: pageHeroSchema.optional(),
  header: pageHeaderSchema.optional(),
  ui: z.record(z.string(), z.any()).optional(),
})

export default defineContentConfig({
  collections: {
    landing: defineCollection({
      type: 'page',
      source: 'index.yaml',
      schema: landingSchema,
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
      schema: pageSchema,
    }),
    snippet: defineCollection({
      type: 'page',
      source: 'snippets/**/*.{md,yaml}',
    }),
  },
})
