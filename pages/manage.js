<<<<<<< HEAD
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import ChildCareIcon from '@material-ui/icons/ChildCare';
import ColorizeIcon from '@material-ui/icons/Colorize';
import BookIcon from '@material-ui/icons/Book';
import WcIcon from '@material-ui/icons/Wc';
import Layout from '.././components/Layout';
import DataFrom from '.././components//CircleButton/dataForm'

const styles = {
	root: {
		width: 500,
	},
};

class LabelBottomNavigation extends React.Component {
	state = {
		value: 'recents',
	};

	handleChange = (event, value) => {
		this.setState({ value });
	};

	render() {
		const { classes } = this.props;
		const { value } = this.state;

		return (
			<div>
				<div style={{ position: 'sticky', width: '100%', top: 0, overflowX: 'hidden' }} >
					<Layout />
				</div>
				<div>
					<DataFrom />
				</div>
				<div style={{ position: 'sticky', width: '100%', bottom: 0, overflowX: 'hidden' }}>
					<BottomNavigation value={value} onChange={this.handleChange} >
						<BottomNavigationAction label="ข้อมูลเด็ก" value="recents" icon={<ChildCareIcon />} />
						<BottomNavigationAction label="ประวัติรับวัคซีน" value="favorites" icon={<ColorizeIcon />} />
						<BottomNavigationAction label="ประวัติการศึกษา" value="nearby" icon={<BookIcon />} />
						<BottomNavigationAction label="ข้อมูลผู้ปกครอง" value="folder" icon={<WcIcon />} />
					</BottomNavigation>
				</div>


			</div>
		);
	}
}

LabelBottomNavigation.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LabelBottomNavigation);
=======
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
>>>>>>> ad587033c75034a9dba1a557b6d0541a0f5f475a
