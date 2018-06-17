import React from 'react'
import Nav from '../Navbar'

class Layout extends React.Component {
	render () {
		return (
			<>
				<Nav />
				{this.props.children}
			</>
		)
	}
}

export default Layout