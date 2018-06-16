import React from 'react'
import Segment from '../components/Segment'
import Button from '../components/Button'
import Layout from '../components/Layout'
import { Form, Grid, GridColumn, Modal, Transition } from 'semantic-ui-react'

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
				<Button color="black" onClick={() => this.setState({ modalOpen: !modalOpen })}>Click</Button>
				<Transition animation="fade" visible={modalOpen} duration={200}>
					<Form>
						<Modal open={modalOpen}>
							<Modal.Header>
								เพิ่มแคมป์
							</Modal.Header>
							<Modal.Content>
								<Grid columns={2} stackable>
									<GridColumn>
										<Form.Field required>
											<label>ที่อยู่</label>
											<Form.Input />
										</Form.Field>
									</GridColumn>
									<GridColumn>
										<Form.Field required>
											<label>เขตที่ตั้ง</label>
											<Form.Input />
										</Form.Field>
									</GridColumn>
								</Grid>
							</Modal.Content>
							<Modal.Actions>
								<Button color="facebook">เพิ่ม</Button>
								<Button
									onClick={() => this.setState({ modalOpen: !modalOpen })}
								>Close</Button>
							</Modal.Actions>
						</Modal>
					</Form>
				</Transition>
			</Layout>
		)
	}
}

export default Index