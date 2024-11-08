<script>
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
	import './styles.css';
	import '../App.css';
</script>

<div class="app pb-10 min-h-full bg-gray-950 text-gray-200">
	<Header />

	<main class="p-2 md:px-28">
		<slot />
	</main>

	<Footer />
</div>
