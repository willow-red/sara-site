<script>
	import Prototype from "$lib/images/VanishingSpacesPrototype.gif";
	import GayGuides from "$lib/images/GayGuides.png";
	import HistoryPin from "$lib/images/HistoryPin.png";
	import ArcGIS from "$lib/images/ArcGIS.png";
	import Sam from "$lib/images/sam.png";
	import Jordan from "$lib/images/jordan.png";
	import Moodboard from "$lib/images/vanishingSpacesMoodboard.png";
	import Architecture from "$lib/images/vanishingSpacesArchitecture.png";
	import Landing from "$lib/images/ideation1.png";
	import Map from "$lib/images/ideation2.png";
	import Tour from "$lib/images/ideation3.png";
	import MobileFigma from "$lib/images/mobileFigma.png";
	import DesktopFigma from "$lib/images/desktopFigma.png";
	import MobilePrototype from "$lib/images/mobilePrototype.gif";
</script>

<svelte:head>
	<title>Vanishing Spaces - Sara Alvarado</title>
	<meta
		name="description"
		content="Vanishing Spaces Case Study. Project from Sara Alvarado's web portfolio."
	/>
</svelte:head>
<!-- project overview -->
<div class="py-8 md:py-12">
	<div class="flex md:flex-row flex-col">
		<div class="flex-1 text-2xl pe-6 mono uppercase">Project Overview</div>
		<div class="flex-1 text-gray-300">
			<p>
				<a
					href="https://invisiblehistory.org/"
					class="underline hover:opacity-50">Invisible Histories</a
				>
				is a non-profit that strives to further Southern LGBTQ+ history through
				<strong
					>community engagement, archiving, preservation, research,
					and education.</strong
				>
			</p>
			<br />
			<p>
				Vanishing Spaces is a web initiative of Invisible Histories that
				aims to digitally preserve notable LGBTQ spaces in the U.S.
				South through interactive maps and archived artifacts, viewable
				through a web-based gallery experience.
			</p>
			<br />
			<p>
				For the <a
					href="https://www.hcde.washington.edu/"
					class="underline hover:opacity-50"
					>UW Human-Centered Design and Engineering</a
				>
				department's Design for Passion event 2024, I worked with a team
				of fellow HCDE students and Invisible Histories. Over the course
				of two months, we developed two prototypes,
				<strong>one mobile and one web.</strong>
			</p>
			<br />
			<p>
				As a designer, I worked closely with the non-profit to evaluate
				the needs of their project proposal and helped develop a design
				system, user flow, and interface for the site.
			</p>
		</div>
	</div>
</div>
<!--Goal-->
<hr class="opacity-50" />
<div class="py-8 md:py-12">
	<p class="text-sm text-gray-400">The Design Challenge</p>
	<h2 class="mono uppercase text-2xl mb-4">Project Goal</h2>
	<p class="text-gray-300 text-xl mb-4">
		Design and build a <strong>working prototype</strong> of the Vanishing
		Spaces website that will allow community members to
		<strong>search, see, and interact</strong> with the spaces, while considering
		the following criteria:
	</p>
	<ul class="list-disc list-inside text-gray-400">
		<li>Easy to navigate but sophisticated enough to be archival.</li>
		<li>
			Cater to both a <strong>very young and older audience</strong
			>—design for varying levels of accessibility needs and technical
			proficiency.
		</li>
		<li>Visually nostalgic, fun, colorful, yet Southern-historical.</li>
	</ul>
</div>
<hr class="opacity-50" />
<!-- Result -->
<div class="py-8 md:py-12">
	<p class="text-sm text-gray-400">The Result</p>
	<h2 class="text-2xl mono uppercase mb-4">Our Solution</h2>
	<p class="text-gray-300 mb-8">
		<strong>Vanishing Spaces</strong> links
		<strong>historical artifacts</strong>
		with <strong>geographical locations</strong> through an interactive map
		tour experience. We built a <strong>working prototype</strong> of the Vanishing
		Spaces website, which allows community members to search, see, and interact
		with the spaces and their corresponding artifacts.
	</p>
	<div class="flex md:flex-row flex-col px-4">
		<div class="flex-1 me-16 p-5 card-static">
			<h3 class="font-bold text-2xl">An Interactive Tour Experience</h3>
			<hr class=" my-2 opacity-25" />
			<ul class="list-disc list-inside text-gray-300 leading-relaxed">
				<li>
					Users can explore the spaces through <strong
						>curated tours</strong
					>, or explore on their own via the map.
				</li>
				<li>
					A textual overview, images, and additional links are
					viewable for each location of the tour through a modal.
				</li>
				<li>
					Call-to-Actions featured on the homepage, encouraging users
					to <strong>contribute to and engage</strong> with the Vanishing
					Spaces project.
				</li>
			</ul>
		</div>
		<div class="flex-1 text-gray-300">
			<img
				src={Prototype}
				alt="Screen recording of a user navigating through the Vanishing Spaces interactive prototype website."
				loading="lazy"
				class="rounded-sm"
			/>
		</div>
	</div>
</div>
<!-- How did we get here? -->
<div class="text-center py-8 my-12">
	<p class="text-sm text-gray-400">How did we get here?</p>
	<h2 class="text-2xl mono uppercase mb-4 text-center">
		Revisiting the Process...
	</h2>
	<div
		class="text-gray-300 grid grid-cols-1 md:grid-cols-4 items-center justify-center gap-4 mb-4"
	>
		<a href="#understanding-our-audience" class="hover:no-underline"
			><div
				class="col-span-1 card-static p-2 opacity-80 transition ease-linear hover:opacity-100"
			>
				<span class="text-2xl px-1 emphasis">1.</span> Understanding our
				Audience →
			</div></a
		>
		<a href="#visual-identity" class="hover:no-underline"
			><div
				class="col-span-1 card-static p-2 opacity-80 transition ease-linear hover:opacity-100"
			>
				<span class="text-2xl px-1 emphasis">2.</span> Visual Identity →
			</div></a
		>
		<a href="#ideation" class="hover:no-underline"
			><div
				class="col-span-1 card-static p-2 opacity-80 transition ease-linear hover:opacity-100"
			>
				<span class="text-2xl px-1 emphasis">3.</span> Ideation →
			</div></a
		>
		<a href="#prototyping" class="hover:no-underline"
			><div
				class="col-span-1 card-static p-2 opacity-80 transition ease-linear hover:opacity-100"
			>
				<span class="text-2xl px-1 emphasis">4.</span> Prototyping
			</div></a
		>
	</div>
	<p class="text-sm text-gray-400">Click to jump sections.</p>
</div>
<!-- understanding our Audience -->
<hr class="opacity-50" />
<div class="p-4 bg-gradient-to-r from-transparent via-gray-800 to-transparent">
	<div class="flex flex-row mono uppercase text-lg text-gray-300">
		<div class="flex-auto pe-4">01</div>
		<div class="flex-auto text-end">
			<h2 id="understanding-our-audience">Understanding our Audience</h2>
		</div>
	</div>
</div>
<hr class="opacity-50" />
<!-- understanding our Audience -->
<div class="py-8 md:py-12">
	<p class="text-sm text-gray-400">The Research Process</p>
	<h3 class="mono uppercase mb-4 text-xl">Competitive Analysis</h3>
	<p class="text-gray-300 mb-4">
		We began the project by analyzing websites with similar functions and
		identifying the features and elements we wanted and didn't want based on
		the brief our clients had provided.
	</p>
	<div class="flex md:flex-row flex-col px-4 mb-8">
		<div class="flex-1 me-12 p-5 card-static">
			<h4 class="text-xl mb-2 font-bold">Mapping the Gay Guides</h4>
			<p class="text-gray-300 text-sm mb-2">
				Longstanding travel guide showing LGBTQ+ businesses in the U.S.
			</p>
			<img
				src={GayGuides}
				alt="Screenshot of Mapping the Gay Guides."
				loading="lazy"
				class="rounded-sm mb-4"
			/>
			<p class="text-gray-400 text-sm">
				<span class="font-semibold">+ Pro:</span> Map navigation follows
				“overview first, zoom and filter, details-on-demand”.
			</p>
			<p class="text-gray-400 text-sm">
				<span class="font-semibold">- Con:</span> Map navigation follows
				“overview first, zoom and filter, details-on-demand”.
			</p>
		</div>
		<div class="flex-1 me-12 p-5 card-static">
			<h4 class="text-xl mb-2 font-bold">HistoryPin</h4>
			<p class="text-gray-300 text-sm mb-2">
				Explore communities with local history— people across the U.S.
				can share stories.
			</p>
			<img
				src={HistoryPin}
				alt="Screenshot of HistoryPin."
				loading="lazy"
				class="rounded-sm mb-4"
			/>
			<p class="text-gray-400 text-sm">
				<span class="font-semibold">+ Pro:</span> Good user interactions—selecting
				a pin opens up a page of detailed information.
			</p>
			<p class="text-gray-400 text-sm">
				<span class="font-semibold">- Con:</span> Very busy layout. Certain
				sections take up more screen space than necessary.
			</p>
		</div>
		<div class="flex-1 me-12 p-5 card-static">
			<h4 class="text-xl mb-2 font-bold">ArcGIS StoryMaps</h4>
			<p class="text-gray-300 text-sm mb-2">
				Web tool for telling historical stories with geographical
				locations on maps.
			</p>
			<img
				src={ArcGIS}
				alt="Screenshot of ArcGIS StoryMaps."
				loading="lazy"
				class="rounded-sm mb-4"
			/>
			<p class="text-gray-400 text-sm">
				<span class="font-semibold">+ Pro:</span> Built-in navigation allows
				for a story-driven experience.
			</p>
			<p class="text-gray-400 text-sm">
				<span class="font-semibold">- Con:</span> Layout breaks down in mobile
				mode— should aim for a responsive design.
			</p>
		</div>
	</div>
	<p class="text-sm text-gray-400">Our Users</p>
	<h3 class="mono uppercase mb-4 text-xl">Personas</h3>
	<p class="text-gray-300 mb-4">
		Based on our client brief, we developed two primary personas to design
		for:
	</p>
	<div class="flex md:flex-row flex-col px-4 mb-8">
		<div class="flex-1 me-12 p-5 card-static">
			<img
				src={Jordan}
				alt=""
				loading="lazy"
				class="rounded-sm mb-3 w-full"
			/>
			<h4 class="text-xl mb-2 font-bold">
				Jordan / 22 / Queer Young Adult
			</h4>
			<p class="text-gray-300 text-sm mb-2">
				Gen-Z, tech-savvy, identifies with the LGBTQ+ community and is
				curious about connecting their identity and culture.
			</p>
			<h5 class="font-semibold">Motivations and Goals</h5>
			<ul class="text-gray-300 text-sm list-disc list-inside mb-2">
				<li>Getting in touch with their history.</li>
				<li>Finding a sense of belonging.</li>
				<li>Understanding their place in this world.</li>
				<li>Discovering places that no longer exist.</li>
			</ul>
			<p class="text-gray-400 text-sm">
				<span class="font-semibold">Themes:</span> Learning and Understanding.
			</p>
		</div>
		<div class="flex-1 me-12 p-5 card-static">
			<img
				src={Sam}
				alt=""
				loading="lazy"
				class="rounded-sm mb-3 w-full"
			/>
			<h4 class="text-xl mb-2 font-bold">Sam / 63 / Gay Older Adult</h4>
			<p class="text-gray-300 text-sm mb-2">
				Grew up around the 60s, has seen the evolution of queer rights,
				and has firsthand experiences with many LGBTQ+ spaces, some of
				which no longer exist.
			</p>
			<h5 class="font-semibold">Motivations and Goals</h5>
			<ul class="text-gray-300 text-sm list-disc list-inside mb-2">
				<li>Revisiting places of personal significance.</li>
				<li>Reliving positive memories.</li>
				<li>Ensuring important histories are preserved.</li>
				<li>
					Having a resource to tell younger colleagues about their
					lived experiences.
				</li>
			</ul>
			<p class="text-gray-400 text-sm">
				<span class="font-semibold">Themes:</span> Remembering and Reliving.
			</p>
		</div>
	</div>
</div>
<hr class="opacity-50" />
<div class="p-4 bg-gradient-to-r from-transparent via-gray-800 to-transparent">
	<div class="flex flex-row mono uppercase text-lg text-gray-300">
		<div class="flex-auto pe-4">02</div>
		<div class="flex-auto text-end">
			<h2 id="visual-identity">Visual Identity</h2>
		</div>
	</div>
</div>
<hr class="opacity-50" />
<div class="py-8 md:py-12">
	<p class="text-sm text-gray-400">Forming Visual Identity</p>
	<p class="text-gray-300">
		Considering the client's request for a visual identity that was
		Southern-historical, colorful, and fun, we created a moodboard, drawing
		inspiration from quilts. We landed on a "vintage" color palette to call
		back to the sense of nostalgia because Vanishing Spaces preserves
		memory.
	</p>
	<br />
	<h3 class="mono uppercase mb-4 text-xl">Moodboard</h3>
	<img
		src={Moodboard}
		alt="Moodboard."
		loading="lazy"
		class="rounded-sm mb-3"
	/>
</div>
<hr class="opacity-50" />
<div class="p-4 bg-gradient-to-r from-transparent via-gray-800 to-transparent">
	<div class="flex flex-row mono uppercase text-lg text-gray-300">
		<div class="flex-auto pe-4">03</div>
		<div class="flex-auto text-end">
			<h2 id="ideation">Ideation</h2>
		</div>
	</div>
</div>
<hr class="opacity-50" />
<div class="py-8 md:py-12">
	<p class="text-sm text-gray-400">Idea Exploration</p>
	<p class="text-gray-300 mb-4">
		Informed by our client brief, research insights, and personas, we
		created a site map and layout sketches.
	</p>
	<div class="grid grid-cols-2 gap-12 justify-around">
		<div>
			<h3 class="mono uppercase mb-2 text-xl">Site Architecture</h3>
			<hr class="opacity-50 mb-4" />
			<img
				src={Architecture}
				alt="Site architecture diagram."
				loading="lazy"
				class="rounded-sm mb-8 max-w-sm"
			/>
			<p class="mb-2 mono uppercase">Thought Process:</p>
			<p class="text-gray-300">
				The map interaction is the central feature of Vanishing Spaces.
				Thus we asked, <strong
					>how might we organize other site content around the
					interactive map tour?</strong
				>
			</p>
		</div>
		<div>
			<h3 class="mono uppercase mb-2 text-xl">Wireframes</h3>
			<hr class="opacity-50 mb-4" />
			<img
				src={Landing}
				alt="Landing page wireframe."
				loading="lazy"
				class="rounded-sm mb-4 max-w-lg"
			/>
			<img
				src={Map}
				alt="Map page wireframe."
				loading="lazy"
				class="rounded-sm mb-4 max-w-lg"
			/>
			<img
				src={Tour}
				alt="Guided tour page wireframe."
				loading="lazy"
				class="rounded-sm mb-4 max-w-lg"
			/>
		</div>
	</div>
</div>
<hr class="opacity-50" />
<div class="p-4 bg-gradient-to-r from-transparent via-gray-800 to-transparent">
	<div class="flex flex-row mono uppercase text-lg text-gray-300">
		<div class="flex-auto pe-4">04</div>
		<div class="flex-auto text-end">
			<h2 id="prototyping">Prototyping</h2>
		</div>
	</div>
</div>
<hr class="opacity-50" />
<div class="py-8 md:py-12">
	<p class="text-sm text-gray-400">Bringing the Vision to Life</p>
	<h3 class="mono uppercase mb-4 text-xl">Final Design Recommendations</h3>
	<div class="grid grid-cols-2 gap-12 justify-around">
		<div>
			<img
				src={MobileFigma}
				alt="Prototype screens of the mobile view."
				loading="lazy"
				class="rounded-sm mb-4 max-w-lg"
			/>
			<img
				src={MobilePrototype}
				alt="Screen recording of a user navigating through the Vanishing Spaces interactive prototype website."
				loading="lazy"
				class="rounded-sm"
			/>
		</div>
		<div>
			<img
				src={DesktopFigma}
				alt="Prototype screens of the desktop view."
				loading="lazy"
				class="rounded-sm mb-4 max-w-lg"
			/>
			<img
				src={Prototype}
				alt="Screen recording of a user navigating through the Vanishing Spaces interactive prototype website."
				loading="lazy"
				class="rounded-sm"
			/>
		</div>
	</div>
</div>
<hr />
