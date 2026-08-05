import { mergeVariantSchemas } from '@happydesigns/nuxt-variants/schemas'
import { variantSchemas } from '@happydesigns/ui/schemas'
import { defineCollection, defineContentConfig, property } from '@nuxt/content'
import { z } from 'zod'

const imageSchema = z.object({
  src: property(z.string()).editor({ input: 'media' }),
  alt: z.string().optional(),
  class: z.string().optional(),
})

const albumImageSchema = imageSchema.extend({
  caption: z.string().optional(),
})

const landingSectionSchema = property(z.object({
  image: imageSchema.optional(),
})).inherit('@nuxt/ui/components/PageSection.vue')

const albumSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  coverImage: albumImageSchema.optional(),
  order: z.number().default(0),
  images: z.array(albumImageSchema),
})

export default defineContentConfig({
  collections: {
    landing: defineCollection({
      type: 'page',
      source: 'index.yaml',
      schema: z.object({
        hero: landingSectionSchema.optional(),
        sections: z.array(landingSectionSchema),
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
      schema: mergeVariantSchemas(['content'], variantSchemas),
    }),

    snippet: defineCollection({
      type: 'page',
      source: 'snippets/**/*.{md,yaml}',
    }),
  },
})
