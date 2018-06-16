import React from 'react'
import styled from 'styled-components'

class ProjectBox extends React.Component {
	render() {
		const Button = styled.div`
			display: block;
			padding: 10px 20px;
			background-color: aquamarine;
		`
		return(
			<Button>Test Button</Button>
		)
	}
}

export default ProjectBox