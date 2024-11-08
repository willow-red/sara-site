<script>
	export let data;
	import spinningSticker from "$lib/images/spinningSticker.png";
	import pointer from "$lib/images/pointer.png";
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
		<div class="md:size-36 size-16 relative inline-block md:ml-14 ml-4 pt-5">
			<img
				src={spinningSticker}
				alt="Spinning sticker: Art, design, software, and research."
				class="object-cover motion-safe:animate-slow-spin"
			/>
			<img
				src={pointer}
				alt="Pixelized mouse pointer."
				class="md:w-10 w-5 absolute md:bottom-6 md:left-14 bottom-0 left-6"
			/>
		</div>
		<h2 class="font-semibold md:text-5xl text-2xl tracking-tight mb-2 text-gray-200">
			UX Researcher, Designer, and Developer
		</h2>
		<p class="text-gray-300">I specialize in crafting user-centric digital experiences, driven by creativity, authenticity, and accessibility. My background in art, graphic design, and computer programming informs my approach to UX development.<br>Currently pursuing a Master's in Human-Centered Design and Engineering at the <span class="font-bold">University of Washington</span>.
		</p>
	</div>
</section>
<hr class="my-8" />
<!--featured projects as thumbnails-->
<ProjectThumbnails {data} />
