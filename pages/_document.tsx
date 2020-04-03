import React from 'react';
import Document, {Head, Main, NextScript} from 'next/document';

export default class MyDocument extends Document {
	render(): JSX.Element {
		return (
			<html lang="pl">
				<Head>
					<meta charSet="utf-8"/>
					<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
					<meta name="description" content="desc"/>
					<meta name="theme-color" content="#121212"/>
					<meta name="msapplication-TileColor" content="#121212"/>
					<meta name="apple-mobile-web-app-capable" content="yes"/>
					<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"/>
					<meta name="twitter:card" content="summary"/>
					<meta name="twitter:title" content="name"/>
					<meta name="twitter:description" content="desc"/>
					<meta name="og:title" content="name"/>
					<meta name="og:description" content="desc"/>
					<meta name="og:url" content="https://example.com"/>
					<meta name="og:site_name" content="name"/>
					<meta name="og:type" content="website"/>
					<link rel="manifest" href="/manifest.json"/>
					<link rel="icon" href="/favicon.png"/>
					<meta name="apple-mobile-web-app-capable" content="yes"/>
				</Head>
				<body>
					<Main/>
					<NextScript/>
				</body>
			</html>
		);
	}
}
