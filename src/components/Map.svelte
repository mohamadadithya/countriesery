<script>
	import { onMount } from 'svelte';
	import { browser } from '$app/env';

	export let lat, long;

	onMount(async () => {
		if (browser) {
			const leaflet = await import('leaflet');

			const map = leaflet.map('map').setView([lat, long], 3.5);

			leaflet
				.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
					attribution:
						'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				})
				.addTo(map);

			leaflet.marker([lat, long]).addTo(map);
		}
	});
</script>

<div id="map" class="w-full z-0 rounded-md shadow-custom h-96 md:h-full mb-2" />
