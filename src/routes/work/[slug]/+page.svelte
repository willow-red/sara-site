<script>
	import VanishingSpaces from "./VanishingSpaces.svelte";
	export let data;
</script>


<!-- hero section -->
<div class="noise-bg z-10 hidden md:block"></div>
<div class="hero-gradient hidden md:block" style="background: linear-gradient(160deg, {data.summary.colors[0]} 0%, {data.summary.colors[1]} 19%, {data.summary.colors[2]} 55%, {data.summary.colors[3]} 100%);"></div>
<div class="z-20 relative m-4 md:mx-12 text-right mb-12">
	<div class="grid md:grid-cols-5 gap-2 items-center">
		<!-- project image -->
		<div class="col-span-3">
			{#await import(`$lib/images/${data.summary.image}.png`) then { default: src }}
				<img
					{src}
					alt={data.summary.title}
					class="object-cover rounded-sm block"
				/>
			{/await}
		</div>
		<!-- project summary -->
		<div class="col-span-2">
			<h1 class="emphasis md:text-6xl text-2xl mb-2 md:mb-8 text-gray-200">
				{data.summary.title}
			</h1>
			<p class="text-gray-300 text-sm leading-relaxed">{data.summary.summary}</p>
		</div>
	</div>
	<hr class="my-8 opacity-50" />
	<!-- project information -->
	<div class="grid md:grid-cols-5 gap-8 text-left mx-8 md:justify-items-center">
		<div class="col-span-1">
			<h2 class="mono uppercase font-semibold text-lg">ROLE</h2>
			<p class="details">{data.summary.role}</p>
		</div>
		<div class="col-span-1">
			<h2 class="mono uppercase font-semibold text-lg">TIMELINE</h2>
			<p class="details">{data.summary.timeline}</p>
		</div>
		<div class="col-span-1">
			<h2 class="mono uppercase font-semibold text-lg">TEAM</h2>
			{#each data.summary.team as member}
				<p class="details">{member}</p>
			{/each}
		</div>
		<div class="col-span-1">
			<h2 class="mono uppercase font-semibold text-lg">SKILLS</h2>
			{#each data.summary.skills as skill}
				<p class="details">{skill}</p>
			{/each}
		</div>
		<div class="col-span-1">
			<h2 class="mono uppercase font-semibold text-lg">TOOLS</h2>
			{#each data.summary.tools as tool}
				<p class="details">{tool}</p>
			{/each}
		</div>
	</div>
</div>
{#if data.summary.slug === "vanishing-spaces"}
	<VanishingSpaces />
{:else}
	<p>Coming Soon!</p>
{/if}

<style>
	.details {
		@apply text-gray-300 text-sm;
	}
</style>
