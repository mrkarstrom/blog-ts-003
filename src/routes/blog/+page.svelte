<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

{#await data.posts}
	<p>Loading posts...</p>
{:then posts}
	<section>
		<h1>Blog Posts</h1>
		<div class="post-grid">
			{#each posts as post}
				<div class="post-card">
					<a data-sveltekit-prefetch href={`/blog/${post.slug}`}>
						<h2>{@html post.title.rendered}</h2>
						<p>
							<span>{@html post.excerpt.rendered}</span>
						</p>
					</a>
				</div>
			{/each}
		</div>
	</section>
{:catch error}
	<p>Error loading posts: {error.message}</p>
{/await}

<style>
	/* General Styles */
	body {
		background-color: #141414;
		color: #ffffff;
		font-family: Arial, sans-serif;
		margin: 0;
		padding: 0;
	}

	section {
		padding: 20px;
	}

	h1 {
		color: #e50914;
		text-align: center;
		margin-bottom: 40px;
		font-size: 2.5rem;
	}

	/* Post Grid */
	.post-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 20px;
		padding: 0 20px;
	}

	/* Post Card */
	.post-card {
		background-color: #222;
		border-radius: 10px;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
		overflow: hidden;
		transition:
			transform 0.3s ease,
			box-shadow 0.3s ease;
	}

	.post-card:hover {
		transform: scale(1.05);
		box-shadow: 0 8px 16px rgba(0, 0, 0, 0.5);
	}

	.post-card a {
		text-decoration: none;
		color: #ffffff;
		display: block;
		padding: 20px;
	}

	.post-card h2 {
		font-size: 1.5rem;
		margin: 0 0 10px;
		color: #e50914;
	}

	.post-card p {
		font-size: 1rem;
		line-height: 1.5;
		margin: 0;
		color: #b3b3b3;
	}

	/* Loading and Error States */
	p {
		text-align: center;
		color: #b3b3b3;
		font-size: 1.2rem;
		margin-top: 20px;
	}
</style>
