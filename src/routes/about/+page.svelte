<script>
	export let data;
</script>
<!--TODO:
	- add icons for links + socials
-->
<svelte:head>
	<title>About - Sara Alvarado</title>
	<meta name="description" content="About Sara Alvarado." />
</svelte:head>
<h1 class="text-4xl mb-4 uppercase mono">About</h1>
<hr class="mb-8" aria-hidden="true"/>
<div class="grid md:grid-cols-2">
	<!---bio section-->
	<div class="md:me-24 col-span-1">
		<h2 class="text-3xl mb-4 emphasis">Info</h2>
		<p class="text-gray-300 mb-3">
			Hi, I'm Sara! I am a designer, researcher, and developer based in Seattle, WA, where I am pursuing my Master's in Human-Centered Design and Engineering at the University of Washington.
		</p>
		<p class="text-gray-300 mb-3">I graduated from the University of Southern California with a B.A. in Art and Design and a minor in Computer Programming in 2024. I began as an artist, then graphic designer, and finally fell in love with technology.</p>
		<p class="text-gray-300 mb-3">I love art, computers, and the internet. In my free time, I enjoy gaming, listening to music, and working on my personal websites such as this one ^_^</p>
		<hr class="my-8 opacity-50" aria-hidden="true"/>
		<h3 class="text-2xl mb-4 emphasis">Contact + Links</h3>
		<ul class="list-none text-gray-300 mb-4">
			<li><a href="mailto:saraalva7gonz@gmail.com" class="underline">saraalva7gonz@gmail.com</a></li>
			<li><a href="https://www.linkedin.com/in/saraalva7/" class="underline">LinkedIn</a></li>
			<li><a href="https://github.com/willow-red" class="underline">GitHub</a></li>
		</ul>
	</div>
	<!--experience section-->
	<div class="col-span-1">
		<h2 class="text-3xl mb-4 emphasis">Experience</h2>
		<ul><!---experience cards--->
		{#each data.summaries as {link, dates, title, content}}
			<li class="card">
				<p class="text-xs text-gray-400">{dates}</p>
				<h3 class="text-base font-semibold mb-1 text-gray-200"><a href={link} rel="noreferrer" class="hover:no-underline card-link-name">{title} <span class="card-link inline-block">↗</span></a></h3>
				<p class="text-gray-300 text-sm">{content}</p>
			</li>
		{/each}
		</ul>
	</div>
</div>
