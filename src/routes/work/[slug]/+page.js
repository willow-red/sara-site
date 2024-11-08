import { error } from '@sveltejs/kit';
import { projectSummaries } from '../../projectSummaries.js';

export function load({ params }) {
	const summary = projectSummaries.find((projectSummaries) => projectSummaries.slug === params.slug);

	if (!summary) throw error(404);

	return {
		summary
	};
}