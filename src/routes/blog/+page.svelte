<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

{#await data.posts}
	<p>Loading posts...</p>
{:then posts}
	<section>
		<h2>Blog Posts</h2>
		<ul>
			{#each posts as post}
				<li>
					<article>
						<a data-sveltekit-prefetch href={`/blog/${post.slug}`}>
							<h3>{@html post.title.rendered}</h3>
						</a>

						<p>
							<strong>Excerpt:</strong>
							<span>{@html post.excerpt.rendered}</span>
						</p>
					</article>
				</li>
			{/each}
		</ul>
	</section>
{:catch error}
	<p>Error loading posts: {error.message}</p>
{/await}
