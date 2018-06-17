import React from 'react'
import Layout from '../components/Layout'
import DataForm from '../components/CircleButton/dataForm'
import BtnNav from '../components/ChildrenTab/index'
import FlexBox from '../components/FlexBox'



class Follower extends React.Component {
	render () {
		return (
			<>
				<Layout>
				</Layout>
				<FlexBox justifyContent="center" alignItems="center" style={{flexDirection: 'column',height: '100%'}}>
					<FlexBox style={{minHeight: 400}}>
						<DataForm />
					</FlexBox>
					<FlexBox style={{ top: 16, bottom: 16, left: 16, right: 16 }} justifyContent="center">
						<BtnNav  />
					</FlexBox>
				</FlexBox>
			</>
		)
	}
}

export default Follower