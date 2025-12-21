import { defineCollection, defineContentConfig } from '@nuxt/content'
import { z } from 'zod/v4'
import { imageSchema, pageHeaderSchema, pageHeroSchema, pageSectionSchema } from './types'

const albumImageSchema = z.object({
  src: z.string(),
  alt: z.string().optional(),
  caption: z.string().optional(),
})

const albumSchema = z.object({
  title: z.string(),
  path: z.string(),
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
      type: 'data',
      source: 'albums/**/*.{yaml,json}',
      schema: albumSchema,
    }),
    content: defineCollection({
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
        }),
        hero: pageHeroSchema.optional(),
        header: pageHeaderSchema.optional(),
        ui: z.object({
          main: z.any().optional(),
          container: z.any().optional(),
          page: z.any().optional(),
          body: z.any().optional(),
          toc: z.any().optional(),
          footer: z.any().optional(),
        }),
      }),
    }),
    snippet: defineCollection({
      type: 'page',
      source: 'snippets/**/*.{md,yaml}',
    }),
  },
})
