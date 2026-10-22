import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const escritos = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/escritos",
    generateId: ({ data, entry }) => {
      if (typeof data.slug === "string" && data.slug.length > 0) {
        return data.slug;
      }

      throw new Error(`Missing frontmatter slug in ${entry}`);
    },
  }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    slug: z.string().min(1),
    sources: z
      .array(
        z.object({
          url: z.string().url(),
          post_id: z.number(),
        })
      )
      .optional(),
  }),
});

export const collections = { escritos };
