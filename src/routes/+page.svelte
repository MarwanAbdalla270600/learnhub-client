<script lang="ts">
</script>

<div class="container px-2 text-gray-300">
	<!--        HERO SECTION        -->
    <section id="hero" class="flex flex-col items-center justify-center h-screen lg:flex-row">
        <div class="flex flex-col gap-8">
          <h1 class="text-6xl text-primary">Learnhub Academy</h1>
          <h2 class="text-4xl text-white">Become the best version of yourself</h2>
          
          <p class="text-2xl">All <strong class="text-white">Courses</strong> you need in one place</p>
          <a
            href="#welcome-learnhub"
            class="h-auto px-6 py-4 text-2xl font-semibold rounded-2xl btn btn-primary w-fit"
            >Watch our Welcome Video</a
          >
          <div class="flex gap-20">
			<a href="https://www.facebook.com/AbuseadaLearnHubAcademy" target="_blank">
				<img src="images/facebook.svg" alt="facebook" width="40px" />
			</a>
			<a href="https://www.youtube.com/@LearnHubWhenknowledgemeetspass" target="_blank">
				<img src="images/youtube.svg" alt="youtube" width="40px" />
			</a>

			<a href="https://www.linkedin.com/in/ahmed-adel-abu-se-da-38541520/" target="_blank">
				<img src="images/linkedin.svg" alt="linkedin" width="40px" />
			</a>
		</div>
        </div>
      
        <div class="hidden lg:block">
          <figure>
            <img src="images/hero.svg" alt="hero" width="100%" />
          </figure>
        </div>
      </section>
      

	<section
		id="welcome-learnhub"
		class="flex flex-col items-center justify-center h-screen gap-10 py-24"
	>
		<!-- svelte-ignore a11y-media-has-caption -->
		<video width="1200px" controls>
			<source src="/videos/welcome_learnhub.mp4" type="video/mp4" />
			Your browser does not support the video tag.
		</video>
		<a
			href="#why-learnhub"
			class="h-auto px-6 py-4 text-2xl font-semibold rounded-2xl btn btn-primary w-fit"
			>Why should you use Learnhub?</a
		>
	</section>

	<section
		id="why-learnhub"
		class="flex flex-col items-center justify-center h-screen gap-10 py-24"
	>
		<!-- svelte-ignore a11y-media-has-caption -->
		<video width="1200px" controls>
			<source src="/videos/why_learnhub.mp4" type="video/mp4" />
			Your browser does not support the video tag.
		</video>
	</section>
</div>
