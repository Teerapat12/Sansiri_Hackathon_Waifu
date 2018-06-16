import React from 'react'
import Input from '@material-ui/core/Input'
import Grid from '@material-ui/core/Grid'

class ChildrenFormCompnent extends React.Component {
	render () {
		return (
			<div style={{flexGrow: 1, padding: 30}}>
				<Grid container spacing={16}>
					<Grid item xs={16} ms={8}>
						<Input />
					</Grid>
					<Grid item xs={16} ms={8}>
						<Input />
					</Grid>
				</Grid>
			</div>
		)
	}
}

export default ChildrenFormCompnent