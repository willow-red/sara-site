<script>
	export let data;
</script>

<div class="flex flex-col my-12">
	{#each data.summaries as { image, title, summary, tags, slug, colors}, i}
		<a href="/work/{slug}" class="hover:no-underline">
			<div class="grid md:grid-cols-2 mb-12 leading-relaxed gap-8 items-center">
				<div class="col-span-1 flex flex-row gap-8">
					<p class="emphasis text-2xl">{"0" + (i + 1)}</p>
					<div class="relative">
						{#await import(`$lib/images/${image}.png`) then { default: src }}
							<img
								{src}
								alt={title}
								class="object-cover rounded-sm block relative z-10"
							/>
						{/await}
						<div class="circle" style="background: {colors[1]};"></div>
					</div>
				</div>
				<div class="col-span-1 py-8 thumbnail-text">
					<h3 class="emphasis text-5xl text-gray-100 mb-4">
						{title}
					</h3>
					<p class="text-gray-300">{summary}</p>
					<p class="text-gray-400 mt-4 text-xs mono uppercase">{tags}</p>
				</div>
			</div>
		</a>
	{/each}
</div>
<style>
	.circle {
		border-radius: 100%;
		filter: blur(2rem);
		@apply absolute w-4/5 h-full left-0 top-0 bottom-0 right-0 opacity-0 transition ease-linear duration-75;
	}
	a:hover .circle {
		@apply opacity-80;
	}
	img{
		@apply transition-transform ease-linear;
	}
	a:hover img{
		@apply -translate-y-2;
	}
</style>
