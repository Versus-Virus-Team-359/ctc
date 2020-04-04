import React from 'react';
import {NextPage} from 'next';
import {
	Heading,
	Flex,
	Stack,
	Image,
	Text
} from '@chakra-ui/core';

import Container from '../components/container';

const About: NextPage<unknown> = () => {
	return (
		<Container>
			<Stack paddingTop={8} spacing={5}>
				<Heading fontSize="xl" textAlign="center" p="5px">About this project:</Heading>
				<Flex
					direction="column"
					wrap="wrap"
					alignItems="center"
					justifyContent="center"
				>
					<Stack spacing={5} textAlign="center" alignItems="center" justifyContent="center">
						<Image p={3} width="40em" src={require('../public/images/hackaton-banner.png')}/>
						<Text maxWidth="50em" p={3}>
							<Text as="b">Coronavirus Treatment Comparison (CTC)</Text> was made during the 48 hour long #VersusVirus online hackaton, held under the patronage of Swiss goverment.
							Our team (#359), initially composed of 9 members, at the end containing 2 people decided to solve a challenge #100 (&quot;Light up the effective treatments&quot;).
							We built a web application using React and Next.js, which includes general stats related to coronavirus, as well as treatment comparisons.
							Despite having a limited human force, we managed to finish everything and submit the project.
						</Text>
					</Stack>
				</Flex>
			</Stack>
		</Container>
	);
};

export default About;
