<script>
	import { page } from '$app/stores';
	import resume from "$lib/files/SaraAlvarado2025Resume.pdf";
</script>

<header>
	<nav class="text-xl mb-8 tracking-tight leading-normal relative z-50 bg-gray-950">
		<ul class="flex md:space-x-8 justify-center flex-col md:flex-row py-4 text-center">
			<li aria-current={$page.url.pathname === '/work' ? 'page' : undefined}>
				<a href="/work">Case Studies</a>
			</li>
			<li aria-current={$page.url.pathname === '/web' ? 'page' : undefined}>
				<a href="/web">Web</a>
			</li>
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a class="emphasis text-3xl" href="/">Sara Alvarado</a>
			</li>
			<li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
				<a href="/about">About</a>
			</li>
			<li aria-current={$page.url.pathname === '/resume' ? 'page' : undefined}>
				<a href="{resume}">Resume</a>
			</li>
		</ul>
		<hr/>
	</nav>
</header>
