<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

{#if data.post}
	<article>
		<h1>{data.post.title.rendered}</h1>
		<div>{@html data.post.content.rendered}</div>
	</article>
{:else}
	<p>Loading post...</p>
{/if}
