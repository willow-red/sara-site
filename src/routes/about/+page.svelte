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
<hr class="mb-8" />
<div class="grid md:grid-cols-2">
	<!---bio section-->
	<div class="md:me-24 col-span-1">
		<h2 class="text-3xl mb-4 underline emphasis">Info</h2>
		<p class="text-gray-300">
			Hi, I'm Sara! I am a designer, researcher, and developer based in Seattle, WA, where I am pursuing my Master's in Human-Centered Design and Engineering at the University of Washington.
		</p>
		<br>
		<p class="text-gray-300">I graduated from the University of Southern California with a B.A. in Art and Design and a minor in Computer Programming in 2024. I began as an artist, then graphic designer, and finally fell in love with technology.</p>
		<br>
		<p class="text-gray-300">I love art, computers, and the internet. In my free time, I enjoy gaming, listening to music, and working on my personal websites such as this one ^_^</p>
		<hr class="my-8 opacity-50"/>
		<h3 class="text-2xl underline mb-4 emphasis">Contact + Links</h3>
		<ul class="list-none text-gray-300 mb-4">
			<li><a href="mailto:saraalva7gonz@gmail.com" class="underline">saraalva7gonz@gmail.com</a></li>
			<li><a href="https://www.linkedin.com/in/saraalva7/" class="underline">LinkedIn</a></li>
			<li><a href="https://github.com/willow-red" class="underline">GitHub</a></li>
			<li><a href="https://willowred.art/" class="underline">♡ My Art ♡</a></li>
		</ul>
	</div>
	<!--experience section-->
	<div class="col-span-1">
		<h2 class="text-3xl mb-4 underline emphasis">Experience</h2>
		{#each data.summaries as {link, dates, title, content}}
		<a href={link} target="_blank" rel="noreferrer" class="hover:no-underline">
			<div class="card">
				<p class="text-xs text-gray-400">{dates}</p>
				<p class="text-base font-semibold mb-1 text-gray-200">{title} <span class="card-link inline-block">↗</span></p>
				<p class="text-gray-300 text-sm">{content}</p>
			</div>
		</a>
		{/each}
	</div>
</div>
