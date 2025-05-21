import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const sessions = defineCollection({
	// Load Markdown files in the `src/content/sessions/` directory.
	loader: glob({ base: './src/content/sessions', pattern: '**/*.md' }),
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		sessionDate: z.string().transform(str => new Date(str)),
	}),
});

export const collections = { sessions };
