import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import app_style from '/static/styles/app_style.scss'

export default class MyDocument extends Document {
	static getInitialProps ({ renderPage }) {
		const sheet = new ServerStyleSheet()
		const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))
		const styleTags = sheet.getStyleElement()
		return { ...page, styleTags }
	}

	render () {
		return (
			<html>
			<Head>
				<title>Good Space by Sansiri</title>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				{this.props.styleTags}
				<style dangerouslySetInnerHTML={{__html: app_style}} />
				<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"/>
			</Head>
			<body>
			<Main />
			<NextScript />
			</body>
			</html>
		)
	}
}