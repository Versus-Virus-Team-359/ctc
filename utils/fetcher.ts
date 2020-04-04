'use strict';

import fetch from 'isomorphic-unfetch';

export const fetcher = async (type: string): Promise<any> => {
	if (type === 'basic') {
		const request = await fetch('https://coronavirus-tracker-api.herokuapp.com/v2/locations');
		const response = await request.json();

		return response;
	}

	if (type === 'timeline-global') {
		const request = await fetch('https://corona.lmao.ninja/v2/historical/all');
		const response = await request.json();

		const dates = Object.keys(response.cases);
		const confirmedAmounts = Object.values(response.cases);
		const deathsAmounts = Object.values(response.deaths);
		const recoveredAmounts = Object.values(response.recovered);

		return {
			dates: dates.slice(1).slice(-20),
			confirmed: confirmedAmounts.slice(1).slice(-20),
			deaths: deathsAmounts.slice(1).slice(-20),
			recovered: recoveredAmounts.slice(1).slice(-20)
		};
	}

	if (type === 'timeline-countries') {
		const request = await fetch('https://corona.lmao.ninja/v2/historical');
		const response = await request.json();

		return response;
	}

	if (type === 'timeline-swiss') {
		const request = await fetch('https://corona.lmao.ninja/v2/historical/CH');
		const response = await request.json();

		const dates = Object.keys(response.timeline.cases);
		const confirmedAmounts = Object.values(response.timeline.cases);
		const deathsAmounts = Object.values(response.timeline.deaths);
		const recoveredAmounts = Object.values(response.timeline.recovered);

		return {
			dates: dates.slice(1).slice(-20),
			confirmed: confirmedAmounts.slice(1).slice(-20),
			deaths: deathsAmounts.slice(1).slice(-20),
			recovered: recoveredAmounts.slice(1).slice(-20)
		};
	}

	return undefined;
};
