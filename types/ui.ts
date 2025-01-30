import { z } from '@nuxt/content'

const buttonSizeEnum = z.enum(['2xs', 'xs', 'sm', 'md', 'lg', 'xl'])
const alignEnum = z.enum(['left', 'right', 'center'])
const orientationEnum = z.enum(['vertical', 'horizontal'])
const targetEnum = z.enum(['_blank', '_parent', '_self', '_top'])

export const featureSchema = z.object({
  as: z.string().optional(),
  icon: z.string().optional(),
  title: z.string().optional(),
  description: z.string().optional(),
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
  label: z.string(),
  color: z.string().optional(),
  trailingIcon: z.string().optional(),
  size: buttonSizeEnum.optional(),
  click: z.function().args(z.any()).returns(z.void()).optional(),
})

export const imageSchema = z.object({
  src: z.string(),
  alt: z.string().optional(),
  class: z.string().optional(),
})

export const pageSectionSchema = z.object({
  as: z.string().optional(),
  headline: z.string().optional(),
  icon: z.string().optional(),
  title: z.string().optional(),
  description: z.string().optional(),
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
  title: z.string().optional(),
  description: z.string().optional(),
  icon: z.string().optional(),
  align: alignEnum.optional(),
  ui: z.any().optional(),
  links: z.array(linkSchema).optional(),
})

export const pageHeaderSchema = z.object({
  title: z.string().optional(),
  description: z.string().optional(),
  icon: z.string().optional(),
  headline: z.string().optional(),
  ui: z.string().optional(),
  links: z.array(linkSchema).optional(),
})
