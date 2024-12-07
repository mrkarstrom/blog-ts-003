<script lang="ts">
	import '../app.css';
</script>

<section class="hero">
	<h1>Welcome to MySite</h1>
	<p>Your go-to place for amazing content. Explore our blog and more!</p>
	<a href="/blog" class="btn">Visit Blog</a>
</section>

<style>
	/* Simple Hero Section Styling */
	.hero {
		background-color: #141414;
		color: #ffffff;
		text-align: center;
		padding: 100px 20px;
	}

	.hero h1 {
		font-size: 3rem;
		margin-bottom: 20px;
		color: #e50914;
	}

	.hero p {
		font-size: 1.2rem;
		color: #b3b3b3;
		margin-bottom: 30px;
	}

	.btn {
		display: inline-block;
		background-color: #e50914;
		color: #ffffff;
		padding: 10px 20px;
		font-size: 1.2rem;
		text-decoration: none;
		border-radius: 5px;
		transition: background-color 0.3s ease;
	}

	.btn:hover {
		background-color: #f40612;
	}
</style>
