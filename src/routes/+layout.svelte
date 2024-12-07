<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<header>
	<nav>
		<div class="logo">
			<a href="/" class="logo-link">MySite</a>
		</div>
		<ul class="nav-links">
			<li><a href="/">Home</a></li>
			<li><a href="/blog">Blog</a></li>
			<li><a href="/about">About</a></li>
		</ul>
	</nav>
</header>

<main class="min-h-full">
	{@render children()}
</main>

<footer>
	<p>&copy; 2024 MySite. All rights reserved.</p>
	<ul class="footer-links">
		<li><a href="/privacy">Privacy Policy</a></li>
		<li><a href="/terms">Terms of Service</a></li>
	</ul>
</footer>

<style>
	/* General layout styles */
	main {
		margin: 0;
		font-family: Arial, sans-serif;
		background-color: #141414;
		color: #ffffff;
	}

	header {
		background-color: #222;
		padding: 20px 0;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
	}

	nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 20px;
	}

	.logo-link {
		font-size: 1.5rem;
		color: #e50914;
		text-decoration: none;
		font-weight: bold;
	}

	.nav-links {
		list-style: none;
		display: flex;
		gap: 20px;
		margin: 0;
		padding: 0;
	}

	.nav-links li a {
		color: #ffffff;
		text-decoration: none;
		font-size: 1.1rem;
		transition: color 0.3s ease;
	}

	.nav-links li a:hover {
		color: #e50914;
	}

	footer {
		background-color: #222;
		padding: 20px 0;
		text-align: center;
		color: #b3b3b3;
	}

	footer .footer-links {
		list-style: none;
		display: inline-flex;
		gap: 20px;
		margin-top: 10px;
		padding: 0;
	}

	footer .footer-links li a {
		color: #b3b3b3;
		text-decoration: none;
		font-size: 1rem;
	}

	footer .footer-links li a:hover {
		color: #ffffff;
	}

	/* Main content styling */
	main {
		padding: 20px;
	}
</style>
