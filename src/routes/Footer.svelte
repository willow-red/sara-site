<script>
	import { page } from '$app/stores';
</script>

<footer class="text-sm text-center md:text-left md:flex flex-row justify-center pt-8">
	<div class="basis-1/4">
		<p class="font-bold">WORK WITH SARA</p>
		<p>Have a project in mind? Let's get in touch!</p>
		<button class="py-1 px-12 border-solid border transition ease-in-out hover:bg-gray-900 rounded-sm">Contact</button>
	</div>
	<div class="basis-1/4">
		<p class="font-bold">SITEMAP</p>
		<ul>
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">Home</a>
			</li>
			<li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
				<a href="/about">About</a>
			</li>
			<li aria-current={$page.url.pathname === '/work' ? 'page' : undefined}>
				<a href="/blog">Work</a>
			</li>
		</ul>
	</div>
	<div class="basis-1/4">
		<p class="font-bold">COLOPHON</p>
		<p>Website by Sara Alvarado.</p>
		<p>Copyright © 2024. All rights reserved.</p>
		<p>Software: SvelteKit, Tailwind CSS.</p>
		<p>Typeface: TASA Orbiter, Apple Garamond.</p>
	</div>
</footer>