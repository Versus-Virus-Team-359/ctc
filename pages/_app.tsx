import React from 'react';
import {AppProps} from 'next/app';
import Head from 'next/head';
import Router from 'next/router';
import {ThemeProvider, DarkMode, theme, CSSReset} from '@chakra-ui/core';
import {Global, css} from '@emotion/core';
import NProgress from 'nprogress';

import Navbar from '../components/navbar';

// Assets
import BitterWoff from '../public/fonts/bitter-v15-latin-regular.woff';
import BitterWoff2 from '../public/fonts/bitter-v15-latin-regular.woff2';
import OpenSansWoff from '../public/fonts/open-sans-v17-latin-regular.woff';
import OpenSansWoff2 from '../public/fonts/open-sans-v17-latin-regular.woff2';
import '../public/styles/nprogress.css';

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

Router.events.on('routeChangeStart', () => {
	NProgress.start();
});
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

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
		</DarkMode>
	</ThemeProvider>
);

export default myApp;
