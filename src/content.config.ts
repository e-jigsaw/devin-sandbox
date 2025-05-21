import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
	}),
});

const sessions = defineCollection({
	// Load Markdown files in the `src/content/sessions/` directory.
	loader: glob({ base: './src/content/sessions', pattern: '**/*.md' }),
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		sessionDate: z.coerce.date(),
	}),
});

export const collections = { blog, sessions };
