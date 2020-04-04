import React from 'react';
import {NextPage} from 'next';
import {Heading, Stack} from '@chakra-ui/core';

import Container from '../components/container';

const Images: NextPage<unknown> = () => {
	return (
		<Container>
			<Stack paddingTop={8} spacing={5}>
				<Heading fontSize="xl" textAlign="center" p="5px">Work in Progress!</Heading>
			</Stack>
		</Container>
	);
};

export default Images;
