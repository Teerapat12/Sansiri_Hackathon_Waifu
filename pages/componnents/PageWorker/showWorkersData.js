import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Apis from '../../getApi/request'

const styles = {
    card: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        marginBottom: 16,
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
};

class ShowWorkers extends React.Component {
    state = {
        data_workers: []
    }

    componentDidMount() {
        Apis.getWorkersData((data) => {
            if (data !== null) {
                this.setState({ data_workers: data.slice(0, 100) })
            } else {
                console.log("log user errer");

            }
        })
    }
    render() {
        const { classes } = this.props;

        const { data_workers } = this.state
        return (
            <div>
                {data_workers.map(post => (
                    <a>
                        <Card className={classes.card}>
                            <CardContent>
                                <Typography className={classes.title} color="textSecondary">
                                   {post.engname}</Typography>
                                <Typography variant="headline" component="h2"> </Typography>
                                <Typography className={classes.pos} color="textSecondary">
                                {post._id} </Typography>
                                <Typography component="p">
                                   
                                </Typography>
                            </CardContent>
                        </Card>
                    </a>
                ))}
            </div>
        )
    }
}

ShowWorkers.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(ShowWorkers);