import {OptionTypeBase, ClassNamesState} from 'react-select';

export const options = [
	{value: 'US', label: 'United States'},
	{value: 'Spain', label: 'Spain'},
	{value: 'Italy', label: 'Italy'},
	{value: 'Germany', label: 'Germany'},
	{value: 'France', label: 'France'},
	{value: 'China', label: 'China'},
	{value: 'Iran', label: 'Iran'},
	{value: 'United Kingdom', label: 'United Kingdom'}
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
