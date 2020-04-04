import React from 'react';
import Link from 'next/link';
import {
	Heading,
	Link as ExternalLink,
	List,
	ListItem
} from '@chakra-ui/core';

import Header from './header';

const Navbar = () => (
	<Header>
		<Link href="/">
			<Heading cursor="pointer">CTC</Heading>
		</Link>
		<List
			display="flex"
			flexWrap="wrap"
			margin={0}
			padding={0}
		>
			<ListItem paddingRight={5}>
				<Link href="/about">
					<ExternalLink fontSize="lg">About</ExternalLink>
				</Link>
			</ListItem>
			<ListItem>
				<Link href="/team">
					<ExternalLink fontSize="lg">Team</ExternalLink>
				</Link>
			</ListItem>
		</List>
	</Header>
);

export default Navbar;
