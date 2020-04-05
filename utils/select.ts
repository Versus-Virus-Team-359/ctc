import {OptionTypeBase, ClassNamesState} from 'react-select';

export const options = [
	{value: 'US', label: 'United States'},
	{value: 'Spain', label: 'Spain'},
	{value: 'Italy', label: 'Italy'},
	{value: 'Germany', label: 'Germany'},
	{value: 'France', label: 'France'},
	{value: 'China', label: 'China'},
	{value: 'Iran', label: 'Iran'},
	{value: 'United Kingdom', label: 'United Kingdom'},
	{value: 'Turkey', label: 'Turkey'},
	{value: 'Switzerland', label: 'Switzerland'},
	{value: 'Belgium', label: 'Belgium'},
	{value: 'Netherlands', label: 'Netherlands'},
	{value: 'Canada', label: 'Canada'},
	{value: 'Austria', label: 'Austria'},
	{value: 'Portugal', label: 'Portugal'},
	{value: 'Brazil', label: 'Brazil'},
	{value: 'Korea, South', label: 'South Korea'},
	{value: 'Israel', label: 'Israel'},
	{value: 'Sweden', label: 'Sweden'},
	{value: 'Australia', label: 'Australia'},
	{value: 'Norway', label: 'Norway'},
	{value: 'Russia', label: 'Russia'},
	{value: 'Ireland', label: 'Ireland'},
	{value: 'Czechia', label: 'Czechia'},
	{value: 'Denmark', label: 'Denmark'},
	{value: 'Chile', label: 'Chile'},
	{value: 'Poland', label: 'Poland'},
	{value: 'Romania', label: 'Romania'},
	{value: 'India', label: 'India'},
	{value: 'Malaysia', label: 'Malaysia'},
	{value: 'Ecuador', label: 'Ecuador'},
	{value: 'Japan', label: 'Japan'},
	{value: 'Philippines', label: 'Philippines'},
	{value: 'Pakistan', label: 'Pakistan'},
	{value: 'Luxembourg', label: 'Luxembourg'},
	{value: 'Saudi Arabia', label: 'Saudi Arabia'},
	{value: 'Thailand', label: 'Thailand'},
	{value: 'Indonesia', label: 'Indonesia'},
	{value: 'Finland', label: 'Finland'},
	{value: 'Mexico', label: 'Mexico'},
	{value: 'Panama', label: 'Panama'},
	{value: 'Peru', label: 'Peru'},
	{value: 'Greece', label: 'Greece'},
	{value: 'Serbia', label: 'Serbia'},
	{value: 'South Africa', label: 'South Africa'},
	{value: 'Dominican Republic', label: 'Dominican Republic'},
	{value: 'Argentina', label: 'Argentina'},
	{value: 'Iceland', label: 'Iceland'},
	{value: 'Colombia', label: 'Colombia'},
	{value: 'Qatar', label: 'Qatar'},
	{value: 'Algeria', label: 'Algeria'},
	{value: 'Ukraine', label: 'Ukraine'},
	{value: 'Singapore', label: 'Singapore'},
	{value: 'Croatia', label: 'Croatia'},
	{value: 'Egypt', label: 'Egypt'},
	{value: 'Estonia', label: 'Estonia'},
	{value: 'New Zealand', label: 'New Zealand'},
	{value: 'Slovenia', label: 'Slovenia'},
	{value: 'Morocco', label: 'Morocco'},
	{value: 'Iraq', label: 'Iraq'},
	{value: 'Armenia', label: 'Armenia'},
	{value: 'Lithuania', label: 'Lithuania'},
	{value: 'Moldova', label: 'Moldova'},
	{value: 'Hungary', label: 'Hungary'},
	{value: 'Diamond Princess', label: 'Diamond Princess'},
	{value: 'Bahrain', label: 'Bahrain'},
	{value: 'Bosnia and Herzegovina', label: 'Bosnia and Herzegovina'},
	{value: 'Cameroon', label: 'Cameroon'},
	{value: 'Tunisia', label: 'Tunisia'},
	{value: 'Kazakhstan', label: 'Kazakhstan'},
	{value: 'Latvia', label: 'Latvia'}
];

export const customStyles = {
	control: (base: Readonly<OptionTypeBase>, state: ClassNamesState) => ({
		...base,
		background: '#272d38',
		borderColor: state?.isFocused ? '#3182ce' : 'rgba(255,255,255,0.04)',
		'&:hover': {
			borderColor: 'rgba(255,255,255,0.08)'
		},
		marginBottom: '1em',
		height: '40px'
	}),
	menu: (base: Readonly<OptionTypeBase>) => ({
		...base,
		background: '#272d38'
	}),
	input: (base: Readonly<OptionTypeBase>) => ({
		...base,
		color: 'white'
	}),
	singleValue: (base: Readonly<OptionTypeBase>) => ({
		...base,
		color: 'white'
	}),
	option: (base: Readonly<OptionTypeBase>) => ({
		...base,
		background: '#272d38',
		'&:hover': {
			background: '#353d4c'
		}
	}),
	placeholder: (base: Readonly<OptionTypeBase>) => ({
		...base,
		color: 'inherit'
	})
};
