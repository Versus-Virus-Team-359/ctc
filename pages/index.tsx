import React from 'react';
import {NextPage} from 'next';
import {
	Heading,
	Stack,
	Text
} from '@chakra-ui/core';

import Container from '../components/container';

const Index: NextPage<unknown> = () => {
	return (
		<Container>
			<Stack spacing={3}>
				<Heading textAlign="center">Versus Virus 2020</Heading>
				<Text textAlign="center">Work in Progress</Text>
			</Stack>
		</Container>
	);
};

export default Index;
