import { webProjects} from './webProjects.js';

export function load() {
	return {
		projects: webProjects.map((webProjects) => ({
			image: webProjects.image,
			link: webProjects.link,
			dates: webProjects.dates,
			title: webProjects.title,
            content: webProjects.content,
			tech: webProjects.tech
		}))
	};
}
