import React from 'react';
import {NextPage} from 'next';
import {
	Heading,
	Link,
	List,
	ListItem,
	Flex,
	Box,
	Stack,
	Image,
	Text,
	Button
} from '@chakra-ui/core';

import Container from '../components/container';
import Header from '../components/header';
import Footer from '../components/footer';

const Index: NextPage<unknown> = () => {
	return (
		<Container>
			<Header>
				<Heading>Project name</Heading>
				<List
					display="flex"
					flexWrap="wrap"
					margin={0}
					padding={0}
				>
					<ListItem paddingRight={5}><Link fontSize="lg">About</Link></ListItem>
					<ListItem paddingRight={5}><Link fontSize="lg">Team</Link></ListItem>
				</List>
			</Header>
			<Stack paddingTop={8} spacing={5}>
				<Heading fontSize="xl" textAlign="center" p="5px">Catchy project description goes here...</Heading>
				<Flex
					direction="row"
					wrap="wrap"
					alignItems="center"
					justifyContent="center"
				>
					<Box p={4} m={3} borderWidth="1px" rounded="lg">
						<Stack spacing={3}>
							<Image width="20em" height="15em" src={require('../public/images/undraw_Calculator.svg')} alt="Numbers"/>
							<Text fontSize="xl">Numbers</Text>
							<Button variantColor="green">Learn more</Button>
						</Stack>
					</Box>
					<Box p={4} m={3} borderWidth="1px" rounded="lg">
						<Stack spacing={3}>
							<Image width="20em" height="15em" src={require('../public/images/undraw_pie_graph.svg')} alt="Numbers"/>
							<Text fontSize="xl">Graphs</Text>
							<Button variantColor="green">Learn more</Button>
						</Stack>
					</Box>
					<Box p={4} m={3} borderWidth="1px" rounded="lg">
						<Stack spacing={3}>
							<Image width="20em" height="15em" src={require('../public/images/undraw_web_search.svg')} alt="Numbers"/>
							<Text fontSize="xl">Images</Text>
							<Button variantColor="green">Learn more</Button>
						</Stack>
					</Box>
				</Flex>
			</Stack>
			<Footer>
				<Text>Made with ❤️ at Versus Virus 2020</Text>
			</Footer>
		</Container>
	);
};

export default Index;
