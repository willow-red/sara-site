<script>
	import { page } from '$app/stores';
</script>

<header>
	<nav class="text-xl mb-8 tracking-tight leading-normal">
		<ul class="flex space-x-8 justify-center">
			<li aria-current={$page.url.pathname === '/work' ? 'page' : undefined}>
				<a href="/work">Work</a>
			</li>
			<li aria-current={$page.url.pathname === '/work' ? 'page' : undefined}>
				<a href="/work">Design</a>
			</li>
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a class="emphasis text-3xl" href="/">Sara Alvarado</a>
			</li>
			<li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
				<a href="/about">About</a>
			</li>
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">Contact</a>
			</li>
		</ul>
	</nav>
</header>
