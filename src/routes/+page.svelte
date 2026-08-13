<script>
	export let data;
	import ProjectThumbnails from './ProjectThumbnail.svelte';
</script>

<svelte:head>
	<title>Sara Alvarado</title>
	<meta name="description" content="Sara Alvarado's Portfolio Site" />
</svelte:head>

<section>
	<div class="md:mb-28 md:mt-12">
		<h1 class="font-bold md:text-9xl text-4xl tracking-tighter text-gray-100 inline">
			Sara Alvarado
		</h1>
		<h2 class="font-semibold md:text-5xl text-2xl tracking-tight mb-2 text-gray-200">
			Digital Accessibility Specialist, Designer, and Developer
		</h2>
		<p class="text-gray-300">I specialize in crafting user-centric digital experiences, driven by creativity, authenticity, and accessibility. My background in art, graphic design, and computer programming informs my approach to UX development.<br>Currently pursuing a Master's in Human-Centered Design and Engineering at the <span class="font-bold">University of Washington</span>.
		</p>
	</div>
</section>
<hr class="my-8" />
<!--featured projects as thumbnails-->
<ProjectThumbnails {data} />
