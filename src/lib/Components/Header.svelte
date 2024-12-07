<header>
	<nav>
		<div class="logo">
			<a href="/" class="logo-link">YESWEB</a>
		</div>
		<ul class="nav-links">
			<li><a href="/">Home</a></li>
			<li><a href="/blog">Blog</a></li>
			<li><a href="/about">About</a></li>
		</ul>
	</nav>
</header>

<style>
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
</style>
