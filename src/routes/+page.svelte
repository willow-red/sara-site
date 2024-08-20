<script>
	export let data;
	import spinningSticker from "$lib/images/spinningSticker.png";
	import pointer from "$lib/images/pointer.png";
	import placeholder from "$lib/images/placeholder.png";
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Sara Alvarado's Portfolio Site" />
</svelte:head>

<section>
	<div class="md:my-28">
		<h1 class="font-bold text-9xl tracking-tighter text-gray-100 inline">
			Sara Alvarado
		</h1>
		<div class="size-36 relative inline-block ml-14 pt-5">
			<img
				src={spinningSticker}
				alt="Spinning sticker: Art, design, software, and research."
				class="object-cover motion-safe:animate-slow-spin"
			/>
			<img
				src={pointer}
				alt="Pixelized mouse pointer."
				class="w-10 absolute bottom-6 left-14"
			/>
		</div>
		<h3 class="font-semibold text-5xl tracking-tight mb-2 text-gray-200">
			Designer, Developer, & Artist
		</h3>
		<p class="text-gray-300">
			Developer, designer, and artist passionate about building and
			designing creative and accessible tech experiences.
		</p>
	</div>
	<hr class="my-8" />
	<div class="flex flex-col">
		{#each data.summaries as { image, title, summary, tags }, i}
			<div class="grid grid-cols-2 mb-12 leading-relaxed gap-8">
				<div class="col-span-1 flex flex-row gap-8">
					<p class="emphasis text-2xl">{"0" + (i + 1)}</p>
					<div class="relative">
						<img
							src={placeholder}
							alt={title}
							class="object-cover rounded-sm block"
						/>
						<div class="noise-bg"></div>
					</div>
				</div>
				<div class="col-span-1 py-8 card">
					<h4 class="emphasis text-5xl text-gray-100 mb-4">
						{title}
					</h4>
					<p class="text-gray-300">{summary}</p>
					<p class="text-gray-400 mt-4 text-sm">{tags}</p>
				</div>
			</div>
		{/each}
	</div>
</section>
