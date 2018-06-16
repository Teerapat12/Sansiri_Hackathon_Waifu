import React from 'react'
import Layout from '../components/Layout'
import Button from '@material-ui/core/Button'

class Index extends React.Component {
	constructor () {
		super();
		this.state = {
			modalOpen: false
		}
	}

	render () {
		const { modalOpen } = this.state
		return (
			<Layout>
				<Button variant="contained" color="primary">Test</Button>
			</Layout>
		)
	}
}

export default Index