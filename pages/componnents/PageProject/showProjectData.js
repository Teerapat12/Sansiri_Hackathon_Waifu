import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import NaverBarProject from './navBar'

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

class ShowProject extends React.Component {
    state = {
        data_project: []
    }

    componentDidMount() {
        Apis.getProjectData((data) => {
            if (data !== null) {
                this.setState({ data_project: data.slice(0, 100) })
            } else {
                console.log("log user errer");

            }
        })
    }
    render() {
        const { classes } = this.props;

        const { data_project } = this.state
        return (
            <div>
                <NaverBarProject/>
                    {data_project.map(post => (
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

ShowProject.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ShowProject);