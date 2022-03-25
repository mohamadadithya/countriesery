<script>
	import { numFormatter } from '../helpers/numFormatter';

	export let covid;
	let date = new Date(covid.updated).toLocaleDateString('en-EN', {
		day: '2-digit',
		month: 'long',
		year: 'numeric'
	});
</script>

<div class="p-6 shadow-custom rounded-md">
	<h1 class="text-xl font-bold mb-6 border-b border-gray-200 pb-5">COVID-19 Stats</h1>
	<ul class="flex justify-between items-center mb-10 border-b border-gray-200 pb-5 text-center">
		<li>
			<p class="font-bold">Confirmed</p>
			<i class="text-5xl my-5 far fa-fw fa-frown text-yellow-500" />
			<p class="text-xl">{numFormatter(covid.cases, 2)}</p>
		</li>
		<li>
			<p class="font-bold">Recovered</p>
			<i class="text-5xl my-5 far fa-fw fa-smile text-green-500" />
			<p class="text-xl">{numFormatter(covid.recovered, 2)}</p>
		</li>
		<li>
			<p class="font-bold">Deaths</p>
			<i class="text-5xl my-5 far fa-fw fa-dizzy text-red-500" />
			<p class="text-xl">{numFormatter(covid.deaths, 2)}</p>
		</li>
	</ul>
	<p>
		<span class="font-bold">Last Update:</span>
		{date}
	</p>
</div>
