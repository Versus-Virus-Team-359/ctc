'use strict';

export const compat = (name: string): string => {
	return name.replace('US', 'USA')
		.replace('United Kingdom', 'UK')
		.replace('Korea, South', 'S. Korea')
		.replace('Bosnia and Herzegovina', 'Bosnia')
		.replace('Moldova', 'Moldova, Republic of');
};
