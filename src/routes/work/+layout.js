import { projectSummaries } from '../projectSummaries.js';
export function load() {
	return {
		summaries: projectSummaries.map((projectSummaries) => ({
			image: projectSummaries.image,
			title: projectSummaries.title,
            summary: projectSummaries.summary,
            tags: projectSummaries.tags,
			slug: projectSummaries.slug,
			role: projectSummaries.role,
			timeline: projectSummaries.timeline,
			team: projectSummaries.team,
			skills: projectSummaries.skills,
			tools: projectSummaries.tools,
			colors: projectSummaries.colors
		}))
	};
}