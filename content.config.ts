import { defineCollection, defineContentConfig, z } from '@nuxt/content'
import { imageSchema, pageHeaderSchema, pageHeroSchema, pageSectionSchema } from './types'

export default defineContentConfig({
  collections: {
    landing: defineCollection({
      type: 'page',
      source: '**/*.yaml',
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
    content: defineCollection({
      type: 'page',
      source: '**/*.{md,yaml}',
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
  },
})
