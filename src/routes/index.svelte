<script>
	import Container from '../components/Container.svelte';
	import { MetaTags } from 'svelte-meta-tags';
	import { countries, hasLoading } from '../stores/countryStore';
	import Card from '../components/Card.svelte';
	import Loading from '../components/Loading.svelte';

	let keyword = '';
	let region = 'Select region';
	let filteredCountries = [];
	const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

	$: {
		if (keyword) {
			// Search the countries
			filteredCountries = $countries.filter((country) =>
				country.name.common.toLowerCase().includes(keyword.toLowerCase())
			);
		} else if (region !== 'Select region') {
			filteredCountries = $countries.filter((country) =>
				country.region.toLowerCase().includes(region.toLowerCase())
			);
		} else {
			filteredCountries = [...$countries];
		}
	}
</script>

<MetaTags title="Countriesery" description="A website to find about country information." />

<div class="pt-24">
	<Container>
		<form class="md:flex justify-between pb-8">
			<div class="md:max-w-fit mb-4 md:mb-0 shadow-custom px-5 py-3 rounded-md flex items-center">
				<i class="far fa-search text-gray-400 mr-4" />
				<input
					type="text"
					class="outline-none w-full bg-transparent"
					name="search"
					id="search"
					placeholder="Search for country..."
					bind:value={keyword}
					autocomplete="off"
				/>
			</div>
			<div class="text-gray-400 bg-white shadow-custom rounded-md p-4 flex items-center max-w-fit">
				<select
					class="bg-transparent mr-4 appearance-none outline-none"
					name="region"
					id="region"
					bind:value={region}
					disabled={keyword}
				>
					<option selected>Select region</option>
					{#each regions as region}
						<option value={region.toLowerCase()}>{region}</option>
					{/each}
				</select>
				<i class="far fa-fw fa-chevron-down" />
			</div>
		</form>
	</Container>
</div>
<section id="countries" class="pb-10">
	<Container classes="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12">
		{#if $hasLoading}
			<Loading />
		{:else if filteredCountries.length <= 0}
			<p class="text-gray-500">Country not found.</p>
		{:else}
			{#each filteredCountries as country}
				<Card {country} />
			{/each}
		{/if}
	</Container>
</section>
