import React, {useState, useEffect, useCallback} from 'react';
import {NextPage} from 'next';
import {Heading, Stack, Flex, Image, Text, Link, Spinner} from '@chakra-ui/core';
import styled from '@emotion/styled';
import {useDropzone, DropzoneRootProps} from 'react-dropzone';

import Container from '../components/container';

const getColor = (props: DropzoneRootProps) => {
	if (props.isDragAccept) {
		return '#00e676';
	}

	if (props.isDragActive) {
		return '#2196f3';
	}

	return '#bdbdbd';
};

const DropZone = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 20px;
	margin-bottom: 1em;
	border-width: 2px;
	border-radius: 2px;
	border-color: ${props => getColor(props)};
	border-style: dashed;
	background-color: #272d38;
	color: #bdbdbd;
	outline: none;
	transition: border .24s ease-in-out;
	width: 20em;
	cursor: pointer;
`;

const Images: NextPage<unknown> = () => {
	const [image, setImage] = useState<any>(null);
	const [classification, setClassification] = useState<any>(null);
	const onDrop = useCallback(async acceptedFiles => {
		setImage(URL.createObjectURL(acceptedFiles[0]));
		setClassification('Loading model...');

		const modelLoaded = () => {
			setClassification(<Spinner/>);
		};

		// @ts-ignore
		const {default: ml5} = await import('ml5');

		const classifier = await ml5.imageClassifier('/model/model.json', modelLoaded);
		const results = await classifier.predict(document.querySelector('#image'));

		if (results[0].label === 'covid') {
			setClassification(`COVID-19 detected, confidence: ${(results[0].confidence * 100).toFixed(2)}%`);
		} else {
			setClassification(`COVID-19 not detected, confidence: ${(results[0].confidence * 100).toFixed(2)}%`);
		}
	}, []);
	const {getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject} = useDropzone({onDrop, accept: 'image/*'});

	useEffect(() => () => {
		// Make sure to revoke the data uris to avoid memory leaks
		// @ts-ignore
		URL.revokeObjectURL(image);
	}, [image]);

	return (
		<Container>
			<Stack paddingTop={8} spacing={5} alignItems="center" justifyContent="center">
				{/*
  					// @ts-ignore */}
				<Image width="30em" p={5} src={require('../public/images/collage.png')} draggable={false} loading="lazy" decoding="async"/>
				<Heading fontSize="xl" textAlign="center" p="5px">Analyze X-Ray photos using Machine Learning:</Heading>
				<Text maxWidth="50em" p={3}>
					This tool allow you to check x-ray lungs scan photos on whether the patient has COVID-19 or not.
				</Text>
				<Text as="b">Sample images (click to download):</Text>
				<Flex>
					<Link download href="/images/covid.png" paddingRight={5}>COVID-19</Link>
					<Link download href="/images/notcovid.jpeg">not COVID-19</Link>
				</Flex>
				<DropZone {...getRootProps({isDragActive, isDragAccept, isDragReject})}>
					<input {...getInputProps()}/>
					<p>Drop an image or click to select</p>
				</DropZone>
				{image ?
					// @ts-ignore
					<Image width={200} id="image" src={image} draggable={false} loading="lazy" decoding="async"/> : ''}
				<Text>{classification}</Text>
			</Stack>
		</Container>
	);
};

export default Images;
