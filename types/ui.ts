import { z } from '@nuxt/content'

const variantEnum = z.enum(['solid', 'outline', 'subtle', 'soft', 'ghost', 'link'])
const colorEnum = z.enum(['primary', 'secondary', 'neutral', 'error', 'warning', 'success', 'info'])
const sizeEnum = z.enum(['xs', 'sm', 'md', 'lg', 'xl'])
const orientationEnum = z.enum(['vertical', 'horizontal'])
const targetEnum = z.enum(['_blank', '_parent', '_self', '_top'])

const as = z.any().optional()
const title = z.string().nonempty()
const description = z.string().nonempty()
const icon = z.string().nonempty().editor({ input: 'icon' })
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
const links = z.array(createLinkSchema())
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
  })
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

export const pageHeroSchema = createBaseSchema().extend({
  as,
  headline,
  links,
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
})

export const pageHeaderSchema = createBaseSchema().extend({
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
