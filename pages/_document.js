import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import app_style from '/static/styles/app_style.scss'
import JssProvider from 'react-jss/lib/JssProvider';
import flush from 'styled-jsx/server';
import getPageContext from '../src/getPageContext';

export default class MyDocument extends Document {
	static getInitialProps ({ renderPage }) {
		const pageContext = getPageContext();
		const sheet = new ServerStyleSheet()
		const styleTags = sheet.getStyleElement()
		const page = renderPage(Component => props => (
			<JssProvider
				registry={pageContext.sheetsRegistry}
				generateClassName={pageContext.generateClassName}
			>
				<Component pageContext={pageContext} {...props} />
			</JssProvider>
		))
		return {
			...page,
			styleTags,
			pageContext,
			styles: (
				<React.Fragment>
					<style
						id="jss-server-side"
						// eslint-disable-next-line react/no-danger
						dangerouslySetInnerHTML={{ __html: pageContext.sheetsRegistry.toString() }}
					/>
					{flush() || null}
				</React.Fragment>
			)
		}
	}

	render () {
		const { pageContext } = this.props;
		return (
			<html>
			<Head>
				<title>Good Space by Sansiri</title>
				<link rel="stylesheet" href="https://unpkg.com/react-select@1.2.1/dist/react-select.css" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				{this.props.styleTags}
				<style dangerouslySetInnerHTML={{ __html: app_style }} />
				<meta name="theme-color" content={pageContext.theme.palette.primary.main} />
				<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
			</Head>
			<body>
			<Main />
			<NextScript />
			</body>
			</html>
		)
	}
}