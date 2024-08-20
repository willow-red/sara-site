<script>
	export let data;
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About Sara Alvarado" />
</svelte:head>

<div class="grid md:grid-cols-2">
	<!---bio section-->
	<div class="md:me-24 col-span-1">
		<h1 class="text-2xl mb-2 underline decoration-1">Info</h1>
		<p>
			Hi, I'm Sara! I am a 4th year student at the University of Southern California.
		</p>
		<p>I entered university with no knowledge of what coding was. As a freshman, I took a class in computer simulations to fulfill a GE. After writing my first program in MatLab (Conway's Game of Life), I became enamored with the art of programming!
		</p>
		<p>The following semester, I decided to pursue a minor in computer programming, and have since continued to learn both in the classroom and independently.
		</p>
		<p>In addition to being a self-proclaimed developer, I am a multimedia artist! My two passions seem distinct in concept, but I strive to combine them in my projects to create something unique.</p>
		<p>With my knowledge of art, design, and code, I create digital products that are beautiful, inside and out. My main focuses are web development, ui, and product design.</p>
	</div>
	<!--experience section-->
	<div class="col-span-1">
		<h1 class="text-2xl mb-2 underline decoration-1">Experience</h1>
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
