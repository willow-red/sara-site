<script>
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
	import './styles.css';
  	import "../app.css";
</script>

<div class="app p-4 pb-10 min-h-full bg-gray-950 text-gray-200">
	<Header />

	<main class="m-2 md:m-8 md:mx-28">
		<slot />
	</main>

	<Footer />
</div>
