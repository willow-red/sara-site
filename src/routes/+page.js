import { projectSummaries } from './projectSummaries.js';

export function load() {
	return {
		summaries: projectSummaries.map((projectSummaries) => ({
			image: projectSummaries.image,
			title: projectSummaries.title,
            summary: projectSummaries.summary,
            tags: projectSummaries.tags,
			slug: projectSummaries.slug,
			colors: projectSummaries.colors
		}))
	};
}