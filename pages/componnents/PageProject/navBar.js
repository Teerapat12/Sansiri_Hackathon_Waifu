import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = {
  root: {
    flexGrow: 1,
  },
};

class NaverBarProject extends React.Component {
  render() {
    const { classes } = props;
    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography variant="title" color="inherit">
              โครงการ
          </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

NaverBarProject.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NaverBarProject);