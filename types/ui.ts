import { z } from 'zod'

const buttonSizeEnum = z.enum(['2xs', 'xs', 'sm', 'md', 'lg', 'xl'])
const alignEnum = z.enum(['left', 'right', 'center'])

const featureSchema = z.object({
  icon: z.string().optional(),
  name: z.string(),
  description: z.string().optional(),
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

export const landingSectionSchema = z.object({
  title: z.string().optional(),
  description: z.string().optional(),
  icon: z.string().optional(),
  align: alignEnum.optional(),
  headline: z.string().optional(),
  features: z.array(featureSchema).optional(),
  links: z.array(linkSchema).optional(),
  slot: z.string().optional(),
  ui: z.any().optional(),
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
