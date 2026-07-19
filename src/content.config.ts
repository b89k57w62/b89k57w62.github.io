import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title_zh: z.string(),
      title_en: z.string(),
      description_zh: z.string(),
      description_en: z.string(),
      techTags: z.array(z.string()),
      year: z.number().int(),
      image: image(),
      link: z.string().url().optional(),
      order: z.number().int(),
    }),
});

export const collections = { projects };
