import React from 'react';
import {NextPage} from 'next';
import Link from 'next/link';
import {
	Heading,
	Flex,
	Box,
	Stack,
	Image,
	Text,
	Button
} from '@chakra-ui/core';

import Container from '../components/container';
import Footer from '../components/footer';

const Index: NextPage<unknown> = () => {
	return (
		<Container>
			<Stack paddingTop={8} spacing={5}>
				<Heading fontSize="xl" textAlign="center" p="5px">Explore stats & compare coronavirus treatment easily!</Heading>
				<Flex
					direction="row"
					wrap="wrap"
					alignItems="center"
					justifyContent="center"
				>
					<Box p={4} m={3} borderWidth="1px" rounded="lg">
						<Stack spacing={3}>
							{/*
  								// @ts-ignore */}
							<Image width="20em" height="15em" src={require('../public/images/undraw_Calculator.svg')} alt="Numbers" draggable={false} loading="lazy" decoding="async"/>
							<Text fontSize="xl">Numbers</Text>
							<Link href="/numbers">
								<Button variantColor="green">Learn more</Button>
							</Link>
						</Stack>
					</Box>
					<Box p={4} m={3} borderWidth="1px" rounded="lg">
						<Stack spacing={3}>
							{/*
  								// @ts-ignore */}
							<Image width="20em" height="15em" src={require('../public/images/undraw_pie_graph.svg')} alt="Numbers" draggable={false} loading="lazy" decoding="async"/>
							<Text fontSize="xl">Graphs</Text>
							<Link href="/graphs">
								<Button variantColor="green">Learn more</Button>
							</Link>
						</Stack>
					</Box>
					<Box p={4} m={3} borderWidth="1px" rounded="lg">
						<Stack spacing={3}>
							{/*
  								// @ts-ignore */}
							<Image width="20em" height="15em" src={require('../public/images/undraw_web_search.svg')} alt="Numbers" draggable={false} loading="lazy" decoding="async"/>
							<Text fontSize="xl">Images</Text>
							<Link href="/images">
								<Button variantColor="green">Learn more</Button>
							</Link>
						</Stack>
					</Box>
				</Flex>
			</Stack>
			<Footer>
				<Text>Made with ❤️ at #VersusVirus 2020</Text>
			</Footer>
		</Container>
	);
};

export default Index;
