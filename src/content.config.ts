import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const countWords = (value: string): number => value.trim().split(/\s+/).filter(Boolean).length;

const textWithWordLimit = (maximum: number) =>
  z
    .string()
    .min(1)
    .refine((value) => countWords(value) <= maximum, {
      message: `Must contain no more than ${maximum} words`,
    });

const caseStudies = defineCollection({
  loader: glob({
    base: './src/content/case-studies',
    pattern: '**/*.md',
  }),
  schema: z.object({
    order: z.number().int().min(1).max(9),
    anchor: z.string().regex(/^[a-z0-9-]+$/),
    title: textWithWordLimit(5),
    problem: textWithWordLimit(18),
    built: textWithWordLimit(22),
    technologies: z
      .array(textWithWordLimit(5))
      .min(3)
      .max(10)
      .refine((technologies) => !technologies.includes('Python') || technologies[0] === 'Python', {
        message: 'Python must be the first technology pill when present',
      }),
    outcome: textWithWordLimit(29),
  }),
});

export const collections = { caseStudies };
