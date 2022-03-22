import { writable } from 'svelte/store';

export const countries = writable([]);
export let hasLoading = writable(true);

const fetchCountries = async () => {
    const url = `https://restcountries.com/v3.1/all`;
    const res = await fetch(url);
    const data = await res.json();
    const loadedCountries = data
    countries.set(loadedCountries);
    hasLoading.set(false);
};

fetchCountries();