<script>
	export let data;
</script>

<h1>Work</h1>

<ul>
	{#each data.summaries as { slug, title }}
		<li><a href="/work/{slug}">{title}</a></li>
	{/each}
</ul>