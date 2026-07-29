import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const caseStudies = defineCollection({
  loader: glob({
    base: './src/content/case-studies',
    pattern: '**/*.md',
  }),
  schema: z.object({
    order: z.number().int().min(1).max(8),
    anchor: z.string().regex(/^[a-z0-9-]+$/),
    title: z.string().min(1),
    problem: z.string().min(1),
    built: z.string().min(1),
    technologies: z.array(z.string()).min(3),
    outcome: z.string().min(1),
  }),
});

export const collections = { caseStudies };
