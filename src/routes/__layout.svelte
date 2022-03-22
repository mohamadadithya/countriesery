<script>
	import Navbar from '../components/Navbar.svelte';
	import '../../static/css/tailwind.css';
	import Footer from '../components/Footer.svelte';
	import { hasLoading } from '../stores/countryStore';
</script>

<svelte:head>
	<link
		href="https://cdn.staticaly.com/gh/hung1001/font-awesome-pro/4cac1a6/css/all.css"
		rel="stylesheet"
		type="text/css"
	/>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="true" />
	<link
		href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;600&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<main class="font-poppins">
	<Navbar />
	<slot />
	{#if !$hasLoading}
		<Footer />
	{/if}
</main>
