<script>
	import { fade } from 'svelte/transition';
	export let country;
</script>

<a
	href={`/country/${country.cca3.toLowerCase()}`}
	class="shadow-lg rounded-lg hover:scale-105 transition-transform duration-200 ease-in-out block"
	transition:fade
>
	<img src={country.flags.svg} class="w-full mb-5 rounded-t-lg" alt={country.name.common} />
	<div class="p-5">
		<h2 class="text-lg font-bold mb-2">{country.name.common}</h2>
		<p class="font-bold">
			Population: <span class="font-normal">{country.population.toLocaleString()}</span>
		</p>
		<p class="font-bold">Region: <span class="font-normal">{country.region}</span></p>
	</div>
</a>
