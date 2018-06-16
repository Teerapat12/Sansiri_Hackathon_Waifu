import React from 'react'
import Router from 'next/router'

class Dashboard extends React.Component{
	render() {
		return(
			<h1><a onClick={() => Router.push('/')}>Go to home</a></h1>
		)
	}
}

export default Dashboard