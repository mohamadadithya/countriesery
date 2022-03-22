<script>
	import Navbar from '../components/Navbar.svelte';
	import '../../static/css/tailwind.css';
</script>

<svelte:head>
	<link
		href="https://cdn.staticaly.com/gh/hung1001/font-awesome-pro/4cac1a6/css/all.css"
		rel="stylesheet"
		type="text/css"
	/>
</svelte:head>

<main>
	<Navbar />
	<slot />
</main>
