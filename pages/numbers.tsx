import React, {useState} from 'react';
import {NextPage, GetServerSideProps} from 'next';
import dynamic from 'next/dynamic';
import {
	Heading,
	Flex,
	Box,
	Stack,
	FormControl,
	FormLabel,
	List,
	ListItem,
	Text,
	Link,
	Icon
} from '@chakra-ui/core';
import useSWR from 'swr';

import Container from '../components/container';
import ResultBox from '../components/result-box';

import {fetcher} from '../utils/fetcher';
import {options, customStyles} from '../utils/select';

const Select = dynamic(
	async () => import('react-select'),
	{
		ssr: false,
		loading: () => null
	}
);

interface Props {
	data: any;
}

export const getServerSideProps: GetServerSideProps = async () => {
	const data = await fetcher('basic');

	return {props: {data}};
};

const Numbers: NextPage<Props> = (props: Readonly<Props>) => {
	const initialData = props.data;

	const {data} = useSWR('basic', fetcher, {initialData});
	const [country, setCountry] = useState<string>('');

	return (
		<Container>
			<Stack paddingTop={8} spacing={5}>
				<Heading fontSize="xl" textAlign="center" p="5px">Latest number statistics:</Heading>
				<Flex
					direction="row"
					wrap="wrap"
					alignItems="center"
					justifyContent="center"
				>
					<Box width="20em" height="15em" p={4} m={3} borderWidth="1px" rounded="lg">
						<Stack spacing={3}>
							<Text fontSize="xl">🌍 Global</Text>
							<ResultBox confirmed={data?.latest?.confirmed} deaths={data?.latest?.deaths}/>
						</Stack>
					</Box>
					<Box width="20em" height="15em" p={4} m={3} borderWidth="1px" rounded="lg">
						<Stack spacing={3}>
							<Text fontSize="xl">🇨🇭 Switzerland</Text>
							<ResultBox
								confirmed={data?.locations.filter((element: any) => element.country === 'Switzerland')[0].latest.confirmed}
								deaths={data?.locations.filter((element: any) => element.country === 'Switzerland')[0].latest.deaths}
							/>
						</Stack>
					</Box>
					<Box width="20em" height="100%" p={4} m={3} borderWidth="1px" rounded="lg">
						<Stack spacing={3}>
							<Text fontSize="xl">Other</Text>
							<FormControl>
								<FormLabel>Select a country</FormLabel>
								<Select styles={customStyles} options={options} onChange={(data: any) => setCountry(data.value)}/>
								{country ?
									<ResultBox
										confirmed={data?.locations.filter((element: any) => element.country === country)[0].latest.confirmed}
										deaths={data?.locations.filter((element: any) => element.country === country)[0].latest.deaths}
									/> :
									<Text as="i">Note: Number of countries is limited for performance reasons.</Text>}
							</FormControl>
						</Stack>
					</Box>
				</Flex>
				<Heading fontSize="xl" textAlign="center" p="5px">Pre-existing medical conditions stats:</Heading>
				<Flex
					direction="row"
					wrap="wrap"
					alignItems="center"
					justifyContent="center"
				>
					<Box width="24em" height="12em" p={4} m={3} borderWidth="1px" rounded="lg">
						<Stack spacing={3}>
							<Text fontSize="xl">Cardiovascular disease:</Text>
							<List styleType="disc">
								<ListItem>Death rate (confirmed cases): 13,2%</ListItem>
								<ListItem>Death rate (all cases): 10,5%</ListItem>
							</List>
							<Link isExternal href="https://www.worldometers.info/coronavirus/coronavirus-age-sex-demographics/">Source <Icon name="external-link" mx="2px"/></Link>
						</Stack>
					</Box>
					<Box width="24em" height="12em" p={4} m={3} borderWidth="1px" rounded="lg">
						<Stack spacing={3}>
							<Text fontSize="xl">Diabetes:</Text>
							<List styleType="disc">
								<ListItem>Death rate (confirmed cases): 9,2%</ListItem>
								<ListItem>Death rate (all cases): 7,3%</ListItem>
							</List>
							<Link isExternal href="https://www.worldometers.info/coronavirus/coronavirus-age-sex-demographics/">Source <Icon name="external-link" mx="2px"/></Link>
						</Stack>
					</Box>
					<Box width="24em" height="12em" p={4} m={3} borderWidth="1px" rounded="lg">
						<Stack spacing={3}>
							<Text fontSize="xl">Chronic respiratory disease:</Text>
							<List styleType="disc">
								<ListItem>Death rate (confirmed cases): 8%</ListItem>
								<ListItem>Death rate (all cases): 6,3%</ListItem>
							</List>
							<Link isExternal href="https://www.worldometers.info/coronavirus/coronavirus-age-sex-demographics/">Source <Icon name="external-link" mx="2px"/></Link>
						</Stack>
					</Box>
					<Box width="24em" height="12em" p={4} m={3} borderWidth="1px" rounded="lg">
						<Stack spacing={3}>
							<Text fontSize="xl">Hypertension</Text>
							<List styleType="disc">
								<ListItem>Death rate (confirmed cases): 8,4%</ListItem>
								<ListItem>Death rate (all cases): 6%</ListItem>
							</List>
							<Link isExternal href="https://www.worldometers.info/coronavirus/coronavirus-age-sex-demographics/">Source <Icon name="external-link" mx="2px"/></Link>
						</Stack>
					</Box>
					<Box width="24em" height="12em" p={4} m={3} borderWidth="1px" rounded="lg">
						<Stack spacing={3}>
							<Text fontSize="xl">Cancer:</Text>
							<List styleType="disc">
								<ListItem>Death rate (confirmed cases): 7,6%</ListItem>
								<ListItem>Death rate (all cases): 5,6%</ListItem>
							</List>
							<Link isExternal href="https://www.worldometers.info/coronavirus/coronavirus-age-sex-demographics/">Source <Icon name="external-link" mx="2px"/></Link>
						</Stack>
					</Box>
					<Box width="24em" height="12em" p={4} m={3} borderWidth="1px" rounded="lg">
						<Stack spacing={3}>
							<Text fontSize="xl">No pre-existing conditions:</Text>
							<List styleType="disc">
								<ListItem>Death rate (all cases): 0,9%</ListItem>
							</List>
							<Link isExternal href="https://www.worldometers.info/coronavirus/coronavirus-age-sex-demographics/">Source <Icon name="external-link" mx="2px"/></Link>
						</Stack>
					</Box>
				</Flex>
			</Stack>
		</Container>
	);
};

export default Numbers;
