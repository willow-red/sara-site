<script>
	import { page } from '$app/stores';
	import resume from "$lib/files/SaraAlvarado2025Resume.pdf";
</script>
<hr class="mt-8">
<footer class="text-sm text-center md:text-left md:flex flex-row justify-center pt-8">
	<div class="basis-1/4">
		<p class="font-bold">WORK WITH SARA</p>
		<p class="mb-2 text-gray-300">Have a project in mind? Let's get in touch!</p>
		<a href="mailto:saraalva7gonz@gmail.com" class="py-1 px-12 border-solid border transition ease-in-out hover:bg-gray-900 rounded-sm mb-4">Contact</a>
	</div>
	<div class="basis-1/4">
		<p class="font-bold">SITEMAP</p>
		<ul class="text-gray-300">
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">Home</a>
			</li>
			<li aria-current={$page.url.pathname === '/web' ? 'page' : undefined}>
				<a href="/web">Web</a>
			</li>
			<li aria-current={$page.url.pathname === '/work' ? 'page' : undefined}>
				<a href="/work">Case Studies</a>
			</li>
			<li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
				<a href="/about">About</a>
			</li>
			<li aria-current={$page.url.pathname === '/resume' ? 'page' : undefined}>
				<a href="{resume}">Resume</a>
			</li>
		</ul>
	</div>
	<div class="basis-1/4">
		<p class="font-bold">COLOPHON</p>
		<p class="text-gray-300">Website by Sara Alvarado.</p>
		<p class="text-gray-300">Copyright © 2025. All rights reserved.</p>
		<p class="text-gray-300">Software: SvelteKit, Tailwind CSS.</p>
		<p class="text-gray-300">Typeface: TASA Orbiter, Apple Garamond, Luxi Mono.</p>
	</div>
</footer>