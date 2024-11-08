<script>
	export let data;
</script>

<svelte:head>
	<title>Web - Sara Alvarado</title>
	<meta name="description" content="Web Projects by Sara Alvarado." />
</svelte:head>
<h1 class="text-4xl mb-4 uppercase mono">Web Projects</h1>
<hr class="mb-8" />
<!--projects section-->
<div class="grid md:grid-cols-2 gap-4">
	{#each data.projects as { image, link, dates, title, content, tech }}
		<a
			href={link}
			target="_blank"
			rel="noreferrer"
			class="hover:no-underline"
		>
			<div class="flex card items-center gap-4">
				{#await import(`$lib/images/${image}.jpg`) then { default: src }}
					<img {src} alt={title} class="max-w-32 md:max-w-48 rounded-sm" />
				{/await}
				<div>
					<p class="text-xs text-gray-400">{dates}</p>
					<p class="text-base font-semibold mb-1 text-gray-200">
						{title} <span class="card-link inline-block">↗</span>
					</p>
					<p class="text-gray-300 text-sm mb-1">{content}</p>
					<p class="text-xs mono uppercase text-gray-400">{tech}</p>
				</div>
			</div>
		</a>
	{/each}
</div>
