import React from 'react';
import {AppProps} from 'next/app';
import Head from 'next/head';
import {ThemeProvider, DarkMode, theme, CSSReset, Text} from '@chakra-ui/core';
import {Global, css} from '@emotion/core';

import Navbar from '../components/navbar';
import Footer from '../components/footer';

// Fonts
import BitterWoff from '../public/fonts/bitter-v15-latin-regular.woff';
import BitterWoff2 from '../public/fonts/bitter-v15-latin-regular.woff2';
import OpenSansWoff from '../public/fonts/open-sans-v17-latin-regular.woff';
import OpenSansWoff2 from '../public/fonts/open-sans-v17-latin-regular.woff2';

const customTheme = {
	...theme,
	fonts: {
		...theme.fonts,
		heading: '"Bitter", sans',
		body: '"Open Sans", sans-serif'
	}
};

const globalStyle = css`
	@font-face {
		font-family: 'Bitter';
		font-style: normal;
		font-weight: 400;
		font-display: fallback;
		src: local('Bitter Regular'), local('Bitter-Regular'),
			url(${BitterWoff2}) format('woff2'),
			url(${BitterWoff}) format('woff');
	}

	@font-face {
		font-family: 'Open Sans';
		font-style: normal;
		font-weight: 400;
		font-display: fallback;
		src: local('Open Sans Regular'), local('OpenSans-Regular'),
			url(${OpenSansWoff2}) format('woff2'),
			url(${OpenSansWoff}) format('woff');
  	}

	body {
		line-height: 1.6;
		margin: 0;
		width: 100%;
		-webkit-font-smoothing: antialiased;
		text-rendering: optimizeSpeed;
    	overflow-x: hidden;
	}
`;

const myApp = ({Component, pageProps}: Readonly<AppProps>): JSX.Element => (
	<ThemeProvider theme={customTheme}>
		<DarkMode>
			<CSSReset/>
			<Global styles={globalStyle}/>
			<Head>
				<title>CTC</title>
			</Head>
			<Navbar/>
			<Component {...pageProps}/>
			<Footer>
				<Text>Made with ❤️ at Versus Virus 2020</Text>
			</Footer>
		</DarkMode>
	</ThemeProvider>
);

export default myApp;
