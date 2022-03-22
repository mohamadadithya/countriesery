<script context="module">
	export async function load({ params }) {
		const slug = params.slug;
		const url = `https://restcountries.com/v3.1/name/${slug}`;
		const res = await fetch(url);
		const country = await res.json();
		return { props: { country } };
	}
</script>

<script>
	import { MetaTags } from 'svelte-meta-tags';
	import Container from '../../components/Container.svelte';

	export let country;
	let countryData = country[0];
	let currencies = [];
	let currency = '';
	let languages = [];
	if (countryData.currencies) {
		currencies = Object.keys(countryData.currencies);
		currency = currencies[0];
	}
	if (countryData.languages) {
		languages = Object.values(countryData.languages);
	}
</script>

<MetaTags title={countryData.name.common} description={countryData.name.official} />

<section id="country" class="pt-24">
	<Container>
		<a href="/" role="button" aria-hidden="true" class="shadow-custom mb-5 inline-block px-6 py-2"
			><i class="far fa-fw fa-arrow-left mr-2" /> Back</a
		>
		<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
			<div>
				<img
					class="shadow-lg w-full rounded-lg"
					src={countryData.flags.svg}
					alt={countryData.name.common}
				/>
			</div>
			<div>
				<h1 class="text-4xl font-bold mb-4">{countryData.name.common}</h1>
				<div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
					<ul>
						<li class="mb-2">
							<span class="font-bold">Native Name:</span>
							{countryData.name.official}
						</li>
						<li class="mb-2">
							<span class="font-bold">Population:</span>
							{countryData.population.toLocaleString()}
						</li>
						<li class="mb-2"><span class="font-bold">Region:</span> {countryData.region}</li>
						<li class="mb-2">
							<span class="font-bold">Sub Region:</span>
							{#if countryData.subregion}
								{countryData.subregion}
							{:else}
								-
							{/if}
						</li>
						<li class="mb-2">
							<span class="font-bold">Capital:</span>
							{#if countryData.capital}
								{countryData.capital}
							{:else}
								-
							{/if}
						</li>
					</ul>
					<ul>
						<li class="mb-2"><span class="font-bold">Top Level Domain:</span> {countryData.tld}</li>
						<li class="mb-2">
							<span class="font-bold">Currencies:</span>
							{#if countryData.hasOwnProperty('currencies')}
								{countryData.currencies[currency].name} ({countryData.currencies[currency].symbol})
							{:else}
								-
							{/if}
						</li>
						<li class="mb-2">
							<span class="font-bold">Languages:</span>
							{#if countryData.hasOwnProperty('languages')}
								{languages.join(', ')}
							{:else}
								-
							{/if}
						</li>
					</ul>
				</div>
			</div>
		</div>
	</Container>
</section>
