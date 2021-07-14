import Document, {
	Html,
	Head,
	Main,
	NextScript,
} from 'next/document';

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(
			ctx,
		);
		return { ...initialProps };
	}

	render() {
		return (
			<Html lang="en">
				<Head>
					<link
						href="https://fonts.googleapis.com/icon?family=Material+Icons"
						rel="stylesheet"
					/>
					<script
						src="https://kit.fontawesome.com/7fe238b80c.js"
						crossOrigin="anonymous"
					/>
					<meta charSet="utf-8" />
				</Head>
				<body>
					<div id="portal"></div>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
