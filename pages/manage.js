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

import Vaccine from '.././pages/vaccine';
import Education from '.././pages/education';
import Worker from '.././pages/worker';

const styles = {
	root: {
		width: 500,
	},
};

class LabelBottomNavigation extends React.Component {
	state = {
		value: '0',
	};

	handleChange = (event, value) => {
		this.setState({ value });
	};

	render() {
		const { classes } = this.props;
		const { value } = this.state;

		return (
			process.browser ? (

				<div>
					<div style={{ position: 'sticky', width: '100%', top: 0, overflowX: 'hidden', zIndex: 100 }} >
						<Layout />
					</div>
					<div style={{ zIndex: '0', position: 'relative'}}>
						{value==='0'?<DataFrom />:null}
						{value==='1'?<Vaccine />: null}
						{value==='2'?<Education />: null}
						{value==='3'?<Worker />: null}
					</div>
					<div style={{ position: 'sticky', width: '100%', bottom: 0, overflowX: 'hidden' }}>
						<BottomNavigation value={value} onChange={this.handleChange} style={{
							position: 'fixed', bottom: '0px', zIndex: '0', width: '100%'
						}} >
							<BottomNavigationAction label="ข้อมูลเด็ก" value="0" icon={<ChildCareIcon />} />
							<BottomNavigationAction label="ประวัติรับวัคซีน" value="1" icon={<ColorizeIcon />} />
							<BottomNavigationAction label="ประวัติการศึกษา" value="2" icon={<BookIcon />} />
							<BottomNavigationAction label="ข้อมูลผู้ปกครอง" value="3" icon={<WcIcon />} />
						</BottomNavigation>
					</div>


				</div>
			) : null

		);
	}
}

LabelBottomNavigation.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LabelBottomNavigation);
