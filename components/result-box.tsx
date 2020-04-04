import React from 'react';
import {
	Stat,
	StatLabel,
	StatNumber
} from '@chakra-ui/core';

interface Props {
	confirmed: number;
	deaths: number;
}

const ResultBox = ({confirmed, deaths}: Readonly<Props>): JSX.Element => (
	<Stat>
		<StatLabel>Confirmed</StatLabel>
		<StatNumber>{new Intl.NumberFormat('ch-CH').format(confirmed)}</StatNumber>
		<StatLabel>Deaths</StatLabel>
		<StatNumber>{new Intl.NumberFormat('ch-CH').format(deaths)}</StatNumber>
	</Stat>
);

export default ResultBox;
