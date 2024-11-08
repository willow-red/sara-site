<script>
	export let data;
</script>

<div class="m-0">
	<main>
		<slot />
	</main>

	<aside>
		<h2>Also see...</h2>
		<ul>
			{#each data.summaries as { slug, title }}
				<li>
					<a href="/work/{slug}">{title}</a>
				</li>
			{/each}
		</ul>
	</aside>
</div>
