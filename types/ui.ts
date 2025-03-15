import { z } from '@nuxt/content'

const variantEnum = z.enum(['solid', 'outline', 'subtle', 'soft', 'ghost', 'link'])
const colorEnum = z.enum(['primary', 'secondary', 'neutral', 'error', 'warning', 'success', 'info'])
const sizeEnum = z.enum(['xs', 'sm', 'md', 'lg', 'xl'])
const alignEnum = z.enum(['left', 'right', 'center'])
const orientationEnum = z.enum(['vertical', 'horizontal'])
const targetEnum = z.enum(['_blank', '_parent', '_self', '_top'])

const baseSchema = {
  title: z.string().nonempty(),
  description: z.string().nonempty(),
}

export const featureSchema = z.object({
  ...baseSchema,
  as: z.string().optional(),
  icon: z.string().optional(),
  orientation: orientationEnum.optional(),
  to: z.union([z.string(), z.any()]).optional(),
  target: targetEnum.nullable().optional(),
  class: z.any().optional(),
  ui: z.object({
    root: z.string().optional(),
    wrapper: z.string().optional(),
    leading: z.string().optional(),
    leadingIcon: z.string().optional(),
    title: z.string().optional(),
    description: z.string().optional(),
  }).optional(),
})

const linkSchema = z.object({
  label: z.string().nonempty(),
  to: z.string().nonempty(),
  icon: z.string().optional(),
  size: sizeEnum,
  trailing: z.boolean().optional(),
  target: z.string().optional(),
  color: colorEnum,
  variant: variantEnum,
})

export const imageSchema = z.object({
  src: z.string(),
  alt: z.string().optional(),
  class: z.string().optional(),
})

export const pageSectionSchema = z.object({
  ...baseSchema,
  as: z.string().optional(),
  headline: z.string().optional(),
  icon: z.string().optional(),
  links: z.array(linkSchema).optional(),
  features: z.array(featureSchema).optional(),
  orientation: orientationEnum.optional(),
  reverse: z.boolean().optional(),
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

export const pageHeroSchema = z.object({
  ...baseSchema,
  icon: z.string().optional(),
  align: alignEnum.optional(),
  ui: z.any().optional(),
  links: z.array(linkSchema).optional(),
})

export const pageHeaderSchema = z.object({
  ...baseSchema,
  icon: z.string().optional(),
  headline: z.string().optional(),
  ui: z.string().optional(),
  links: z.array(linkSchema).optional(),
})
