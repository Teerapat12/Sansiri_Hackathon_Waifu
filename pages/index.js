import React from 'react'
import Layout from '../components/Layout'
import Router from 'next/router'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import FlexBox from '../components/FlexBox'
import CircleButton from '../components/CircleButton'
import Favorite from '@material-ui/icons/Favorite'
import Face from '@material-ui/icons/Face'
class Index extends React.Component {
	constructor () {
		super();
		this.state = {
			modalOpen: false
		}
	}

	render () {
		const paperStyle = {
			position: 'absolute',
			top: 0,
			right: 0,
			bottom: 0,
			left: 0,
			backgroundImage: 'url("/static/images/homeBG.jpg")',
			backgroundSize: 'cover',
			backgroundPosition: 'center bottom'
		}
		return (
			<Layout>
				<Paper style={paperStyle}>
					<FlexBox style={{width: '100%', height: '100vh', justifyContent: "space-evenly"}}>
						<FlexBox>
							<CircleButton onClick={() => Router.push('/dashboard')}>
								<Favorite />
								ภาพรวม
							</CircleButton>
						</FlexBox>
						<FlexBox>
							<CircleButton onClick={() => Router.push('/manage')}>
								<Face />
								จัดการ
							</CircleButton>
						</FlexBox>
					</FlexBox>
				</Paper>
			</Layout>
		)
	}
}

export default (Index)