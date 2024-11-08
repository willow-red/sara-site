<script>
	export let data;
	import ProjectThumbnails from '../ProjectThumbnail.svelte';
</script>
<svelte:head>
	<title>Case Studies - Sara Alvarado</title>
	<meta name="description" content="Case studies from Sara Alvarado's web portfolio." />
</svelte:head>
<!--featured projects as thumbnails-->
<ProjectThumbnails {data} />
