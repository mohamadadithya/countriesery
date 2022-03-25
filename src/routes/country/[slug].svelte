<script context="module">
	export async function load({ params }) {
		const slug = params.slug;
		const urlCountry = `https://restcountries.com/v3.1/alpha/${slug}`;
		const urlCovid = `https://disease.sh/v3/covid-19/countries/${slug}?strict=true`;
		try {
			const [country, covid] = await Promise.all([
				fetch(urlCountry).then((res) => res.json()),
				fetch(urlCovid).then((res) => res.json())
			]);
			return { props: { country, covid } };
		} catch (error) {
			console.error(error);
		}
	}
</script>

<script>
	import StatsCard from '../../components/StatsCard.svelte';
	import { MetaTags } from 'svelte-meta-tags';
	import Container from '../../components/Container.svelte';
	import Map from '../../components/Map.svelte';

	export let country;
	export let covid;

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
<svelte:head>
	<link
		rel="stylesheet"
		href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
		integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
		crossorigin=""
	/>

	<script
		src="https://unpkg.com/leaflet@1.6.0/dist/leaflet.js"
		integrity="sha512-gZwIG9x3wUXg2hdXF6+rVkLF/0Vi9U8D2Ntg4Ga5I5BZpVkVxlJWbSQtXPSiUTtC0TjtGOmxa1AJPuV0CPthew=="
		crossorigin="true"></script>
</svelte:head>

<section id="country" class="pt-24 mb-5">
	<Container>
		<a href="/" role="button" aria-hidden="true" class="shadow-custom mb-5 inline-block px-6 py-2"
			><i class="far fa-fw fa-arrow-left mr-2" /> Back</a
		>
		<div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
			<img
				class="shadow-lg w-full rounded-lg mb-6"
				src={countryData.flags.svg}
				alt={countryData.name.common}
			/>
			<div>
				<h1 class="text-4xl font-bold mb-4">{countryData.name.common}</h1>
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
					<li class="mb-2">
						<span class="font-bold">Area:</span>
						{countryData.area.toLocaleString()} km²
					</li>
					<li class="mb-2">
						<span class="font-bold">Top Level Domain:</span>
						{countryData.tld}
					</li>
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
		<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
			<Map lat={countryData.latlng[0]} long={countryData.latlng[1]} />
			{#if !covid.message}
				<StatsCard {covid} />
			{/if}
		</div>
	</Container>
</section>
