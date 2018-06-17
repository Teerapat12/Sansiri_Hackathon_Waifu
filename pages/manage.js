import React from 'react'
import Layout from '../components/Layout'
import ChildrenTab from '../components/ChildrenTab'


class Management extends React.Component {

	render () {
		return (
			<>
				<Layout>
					<ChildrenTab />
				</Layout>
			</>
		)
	}
}

export default (Management);
