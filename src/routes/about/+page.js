import { experience } from './experience.js';

export function load() {
	return {
		summaries: experience.map((experience) => ({
			link: experience.link,
			dates: experience.dates,
			title: experience.title,
            content: experience.content
		}))
	};
}
