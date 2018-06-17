import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import ChildCareIcon from '@material-ui/icons/ChildCare';
import ColorizeIcon from '@material-ui/icons/Colorize';
import BookIcon from '@material-ui/icons/Book';
import WcIcon from '@material-ui/icons/Wc';
import Paper from '@material-ui/core/Paper'
import ChildrenFormComponent from '../ChildrenFormComponent'
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
	root: {
		backgroundColor: theme.palette.background.paper,
		width: 500,
	},
});

function TabContainer({ children, dir }) {
	return (
		<Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
			{children}
		</Typography>
	);
}

const styles = {
  slide: {
    padding: 15,
    minHeight: 100,
    color: '#fff',
  },
  slide1: {
    background: '#FEA900',
  },
  slide2: {
    background: '#B3DC4A',
  },
  slide3: {
    background: '#6AC0FF',
  },
};


class LabelBottomNavigation extends React.Component {
    state = {
		tabIndex: '0'
    };

	onTabChange = (e, value) => {
		this.setState({tabIndex: value})
		console.log(value)
	}

	handleChangeIndex = index => {
		this.setState({ tabIndex: index });
	};

    render() {

		const { theme } = this.props;
        const { tabIndex } = this.state;
        return (
            <div style={{
                position: 'absolute', width: '100%', bottom: '15px',
            }}>
                {
                    process.browser? (
						<Paper>
							<SwipeableViews>
								<div style={Object.assign({}, styles.slide, styles.slide1)}>
									slide n°1
								</div>
								<div style={Object.assign({}, styles.slide, styles.slide2)}>
									slide n°2
								</div>
								<div style={Object.assign({}, styles.slide, styles.slide3)}>
									slide n°3
								</div>
							</SwipeableViews>
							<Tabs
								value={tabIndex}
								indicatorColor="primary"
								textColor="primary"
								centered
								onChange={this.onTabChange}
							>
								<Tab label="ข้อมูลเด็ก" value="0" icon={<ChildCareIcon />}/>
								<Tab label="ประวัติรับวัคซีน" value="1" icon={<ColorizeIcon />}/>
								<Tab label="ประวัติการศึกษา" value="2" icon={<BookIcon />}/>
								<Tab label="ข้อมูลผู้ปกครอง" value="3" icon={<WcIcon />}/>
							</Tabs>
						</Paper>
                    ): null
                }
            </div>
        );
    }
}

LabelBottomNavigation.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(LabelBottomNavigation);