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
	Text,
	Spinner
} from '@chakra-ui/core';
import useSWR from 'swr';
import {format} from 'date-fns';

import Container from '../components/container';

import {fetcher} from '../utils/fetcher';
import {options, customStyles} from '../utils/select';
import {compat} from '../utils/compat';

const Select = dynamic(
	async () => import('react-select'),
	{
		ssr: false,
		loading: () => null
	}
);

const Bar = dynamic(
	// @ts-ignore
	async () => import('react-chartjs-2').then(module => module.Bar),
	{loading: () => <Spinner/>}
);

const Line = dynamic(
	// @ts-ignore
	async () => import('react-chartjs-2').then(module => module.Line),
	{loading: () => <Spinner/>}
);

interface Props {
	globalData: any;
	swissData: any;
	countriesData: any;
}

export const getServerSideProps: GetServerSideProps = async () => {
	const globalData = await fetcher('timeline-global');
	const swissData = await fetcher('timeline-swiss');

	return {props: {globalData, swissData}};
};

const Graphs: NextPage<Props> = (props: Readonly<Props>) => {
	const initialGlobalData = props.globalData;
	const initialSwissData = props.swissData;

	const [country, setCountry] = useState<string>('');
	const {data: globalData} = useSWR('timeline-global', fetcher, {initialData: initialGlobalData});
	const {data: swissData} = useSWR('timeline-swiss', fetcher, {initialData: initialSwissData});
	const {data: countriesData} = useSWR(country ? 'timeline-countries' : null, fetcher);

	return (
		<Container>
			<Stack paddingTop={8} spacing={5} paddingBottom={5}>
				<Heading fontSize="xl" textAlign="center" p="5px">Latest graph statistics:</Heading>
				<Flex
					direction="row"
					wrap="wrap"
					alignItems="center"
					justifyContent="center"
				>
					<Box width="24em" height="25em" p={4} m={3} borderWidth="1px" rounded="lg">
						<Stack spacing={3}>
							<Text fontSize="xl">🌍 Global</Text>
							<Line
								height={250}
								data={{
									labels: globalData?.dates?.map((element: string) => `${format(new Date(element), 'dd.MM')}`),
									datasets: [
										{
											label: 'Confirmed',
											borderColor: '#E53E3E',
											backgroundColor: '#E53E3E',
											fill: false,
											data: globalData?.confirmed,
											pointRadius: 0
										},
										{
											label: 'Deaths',
											borderColor: '#63171B',
											backgroundColor: '#63171B',
											fill: false,
											data: globalData?.deaths,
											pointRadius: 0
										},
										{
											label: 'Recovered',
											borderColor: '#38A169',
											backgroundColor: '#38A169',
											fill: false,
											data: globalData?.recovered,
											pointRadius: 0
										}
									]
								}}
								options={{
									elements: {point: {hitRadius: 7, hoverRadius: 5}},
									tooltips: {
										mode: 'index',
										intersect: false,
										callbacks: {
											title(tooltipItems: any) {
												return `🕒 ${tooltipItems[0].xLabel}`;
											},
											label(tooltipItem: any) {
												return new Intl.NumberFormat('ch-CH').format(tooltipItem.yLabel);
											}
										}
									}
								}}
							/>
						</Stack>
					</Box>
					<Box width="24em" height="25em" p={4} m={3} borderWidth="1px" rounded="lg">
						<Stack spacing={3}>
							<Text fontSize="xl">🇨🇭 Switzerland</Text>
							<Line
								height={250}
								data={{
									labels: swissData?.dates?.map((element: string) => `${format(new Date(element), 'dd.MM')}`),
									datasets: [
										{
											label: 'Confirmed',
											borderColor: '#E53E3E',
											backgroundColor: '#E53E3E',
											fill: false,
											data: swissData?.confirmed,
											pointRadius: 0
										},
										{
											label: 'Deaths',
											borderColor: '#63171B',
											backgroundColor: '#63171B',
											fill: false,
											data: swissData?.deaths,
											pointRadius: 0
										},
										{
											label: 'Recovered',
											borderColor: '#38A169',
											backgroundColor: '#38A169',
											fill: false,
											data: swissData?.recovered,
											pointRadius: 0
										}
									]
								}}
								options={{
									elements: {point: {hitRadius: 7, hoverRadius: 5}},
									tooltips: {
										mode: 'index',
										intersect: false,
										callbacks: {
											title(tooltipItems: any) {
												return `🕒 ${tooltipItems[0].xLabel}`;
											},
											label(tooltipItem: any) {
												return new Intl.NumberFormat('ch-CH').format(tooltipItem.yLabel);
											}
										}
									}
								}}
							/>
						</Stack>
					</Box>
					<Box width="24em" height="100%" p={4} m={3} borderWidth="1px" rounded="lg">
						<Stack spacing={3}>
							<Text fontSize="xl">Other</Text>
							<FormControl>
								<FormLabel>Select a country</FormLabel>
								<Select styles={customStyles} options={options} onChange={(data: any) => setCountry(data.value)}/>
								{countriesData && country ?
									<Line
										height={250}
										data={{
											labels: Object.keys(countriesData.filter((element: any) => element.country === compat(country))[0]?.timeline.cases)?.slice(1)?.slice(-20)?.map((element: string) => `${format(new Date(element), 'dd.MM')}`),
											datasets: [
												{
													label: 'Confirmed',
													borderColor: '#E53E3E',
													backgroundColor: '#E53E3E',
													fill: false,
													data: Object.values(countriesData.filter((element: any) => element.country === compat(country))[0]?.timeline.cases).slice(1).slice(-20),
													pointRadius: 0
												},
												{
													label: 'Deaths',
													borderColor: '#63171B',
													backgroundColor: '#63171B',
													fill: false,
													data: Object.values(countriesData.filter((element: any) => element.country === compat(country))[0]?.timeline.deaths).slice(1).slice(-20),
													pointRadius: 0
												},
												{
													label: 'Recovered',
													borderColor: '#38A169',
													backgroundColor: '#38A169',
													fill: false,
													data: Object.values(countriesData.filter((element: any) => element.country === compat(country))[0]?.timeline.recovered).slice(1).slice(-20),
													pointRadius: 0
												}
											]
										}}
										options={{
											elements: {point: {hitRadius: 7, hoverRadius: 5}},
											tooltips: {
												mode: 'index',
												intersect: false,
												callbacks: {
													title(tooltipItems: any) {
														return `🕒 ${tooltipItems[0].xLabel}`;
													},
													label(tooltipItem: any) {
														return new Intl.NumberFormat('ch-CH').format(tooltipItem.yLabel);
													}
												}
											}
										}}
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
					<Box width="24em" height="25em" p={4} m={3} borderWidth="1px" rounded="lg">
						<Text>% of Deaths (confirmed cases)</Text>
						<Stack spacing={3}>
							<Bar
								height={250}
								data={{
									labels: ['Disease type'],
									datasets: [
										{
											label: 'Cardiovascular disease',
											backgroundColor: '#E53E3E',
											data: [13.2]
										},
										{
											label: 'Diabetes',
											backgroundColor: '#DD6B20',
											data: [9.2]
										},
										{
											label: 'Chronic respiratory disease',
											backgroundColor: '#D69E2E',
											data: [8]
										},
										{
											label: 'Hypertension',
											backgroundColor: '#38A169',
											data: [8.4]
										},
										{
											label: 'Cancer',
											backgroundColor: '#319795',
											data: [7.6]
										}
									]
								}}
							/>
						</Stack>
					</Box>
					<Box width="24em" height="25em" p={4} m={3} borderWidth="1px" rounded="lg">
						<Text>% of Deaths (all cases)</Text>
						<Stack spacing={3}>
							<Bar
								height={250}
								data={{
									labels: ['Disease type'],
									datasets: [
										{
											label: 'Cardiovascular disease',
											backgroundColor: '#E53E3E',
											data: [10.5]
										},
										{
											label: 'Diabetes',
											backgroundColor: '#DD6B20',
											data: [7.3]
										},
										{
											label: 'Chronic respiratory disease',
											backgroundColor: '#D69E2E',
											data: [6.3]
										},
										{
											label: 'Hypertension',
											backgroundColor: '#38A169',
											data: [6]
										},
										{
											label: 'Cancer',
											backgroundColor: '#319795',
											data: [5.6]
										},
										{
											label: 'No pre-existing conditions',
											backgroundColor: '#3182CE',
											data: [0.9]
										}
									]
								}}
							/>
						</Stack>
					</Box>
				</Flex>
			</Stack>
		</Container>
	);
};

export default Graphs;
