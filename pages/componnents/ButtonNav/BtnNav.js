import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import ChildCareIcon from '@material-ui/icons/ChildCare';
import ColorizeIcon from '@material-ui/icons/Colorize';
import BookIcon from '@material-ui/icons/Book';
import WcIcon from '@material-ui/icons/Wc';
import Layout from '../../../components/Layout';
import DataFrom from '../CircleButton/dataForm'

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
                <div style={{
                    position: 'absolute', width: '100%', top: '0px',
                }}>
                    <div
                        style={{
                            position: 'absolute', width: '100%', top: '0px',
                        }}>
                        <Layout />
                    </div>
                    <div>
                        <DataFrom />
                    </div>
                    <div style={{
                        position: 'absolute', width: '100%', bottom: '15px',
                    }}>
                        <BottomNavigation value={value} onChange={this.handleChange} className={classes.root}>
                            <BottomNavigationAction label="ข้อมูลเด็ก" value="recents" icon={<ChildCareIcon />} />
                            <BottomNavigationAction label="ประวัติรับวัคซีน" value="favorites" icon={<ColorizeIcon />} />
                            <BottomNavigationAction label="ประวัติการศึกษา" value="nearby" icon={<BookIcon />} />
                            <BottomNavigationAction label="ข้อมูลผู้ปกครอง" value="folder" icon={<WcIcon />} />
                        </BottomNavigation>
                    </div>
                </div>
            </div>
        );
    }
}

LabelBottomNavigation.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LabelBottomNavigation);