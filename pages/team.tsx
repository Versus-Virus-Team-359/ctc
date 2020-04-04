import React from 'react';
import {NextPage} from 'next';
import {
	Heading,
	Flex,
	Box,
	Stack,
	Image,
	Text
} from '@chakra-ui/core';

import Container from '../components/container';

const Team: NextPage<unknown> = () => {
	return (
		<Container>
			<Stack paddingTop={8} spacing={5}>
				<Heading fontSize="xl" textAlign="center" p="5px">Meet our team!</Heading>
				<Flex
					direction="row"
					wrap="wrap"
					alignItems="center"
					justifyContent="center"
				>
					<Box width="20em" p={4} m={3} borderWidth="1px" rounded="lg">
						<Stack spacing={3} textAlign="center" alignItems="center" justifyContent="center">
							<Image width="10em" rounded="full" src={require('../public/images/antoni.png')} alt="Antoni Kepinski"/>
							<Text fontSize="xl">Antoni Kepinski 🇵🇱</Text>
							<Text as="i">Front end development</Text>
						</Stack>
					</Box>
					<Box width="20em" p={4} m={3} borderWidth="1px" rounded="lg">
						<Stack spacing={3} textAlign="center" alignItems="center" justifyContent="center">
							<Image width="10em" rounded="full" src={require('../public/images/bhargav.png')} alt="Bhargav Bhatt"/>
							<Text fontSize="xl">Bhargav Bhatt 🇱🇮</Text>
							<Text as="i">Machine learning, image classification</Text>
						</Stack>
					</Box>
				</Flex>
			</Stack>
		</Container>
	);
};

export default Team;
