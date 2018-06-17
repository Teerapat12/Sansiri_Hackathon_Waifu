import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TextField from '@material-ui/core/TextField';
import Save from '@material-ui/icons/Save';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import Apis from '../../getApi/request'

const styles = theme => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 120,
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    button: {
        margin: theme.spacing.unit,
    },
    leftIcon: {
        marginRight: theme.spacing.unit,
    },
    rightIcon: {
        marginLeft: theme.spacing.unit,
    },
    iconSmall: {
        fontSize: 20,
    },
});



class DataForm extends React.Component {

    state = {
        age: '',
        student: '',
        sex: '',
        openSexForm: false,
        openAge: false,
        openStudent: false,
        data_followers: [],
        data_workers: []
    };

    handleChangeSexForm = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    openSexForm = () => {
        this.setState({ openSexForm: true });
        console.log('aa');

    };

    handleCloseAge = () => {
        this.setState({ handleCloseAge: false });
    };

    handleChangeAge = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    openAge = () => {
        this.setState({ openAge: true });
    };

    handleCloseAge = () => {
        this.handleCloseAge({ handleCloseAge: false });
    };

    handleChangeStudent = event => {
        this.setState({ [event.target.name]: event.target.value });
        console.log({ [event.target.name]: event.target.value });

    };

    openStudent = () => {
        this.setState({ openStudent: true });
    };

    handleCloseStudent = () => {
        this.handleCloseStudent({ handleCloseStudent: false });
    };
    componentDidMount() {
        Apis.getFollowersData((data) => {
            if (data !== null) {
                this.setState({ data_followers: data.slice(0, 1000) })
            } else { }
        });

        Apis.getWorkersData((data) => {
            if (data !== null) {
                this.setState({ data_workers: data.slice(0, 1000) })
            } else { }
        })
    }
    render() {
        const { classes, } = this.props;
        const { data_followers, data_workers } = this.state;
        return (
            <div>
                {data_followers.map((data, number) => (
                    <div className={classes.root}>
                        <ExpansionPanel>
                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography className={classes.heading}>บุตรคนที่ {number + 1}</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <Typography style={{ width: '100%' }}>
                                    <div>
                                        <FormControl className={classes.formControl} style={{ display: 'flex' }}>
                                            <InputLabel htmlFor="controlled-open-select-sex">เพศ</InputLabel>
                                            <Select
                                                onClose={this.handleCloseSexForm}
                                                onOpen={this.handleOpen}
                                                onChange={this.handleChangeSexForm}
                                                value={this.state.sex}
                                                inputProps={{
                                                    name: 'sex',
                                                    id: 'controlled-open-select-sex',
                                                }}

                                            >
                                                <MenuItem value={true}>ชาย</MenuItem>
                                                <MenuItem value={false}>หญิง</MenuItem>
                                            </Select>
                                        </FormControl>
                                        <FormControl className={classes.margin} style={{ display: 'flex' }}>
                                            <InputLabel

                                                htmlFor="custom-css-input"
                                            >
                                                ชื่อ</InputLabel>
                                            <Input

                                                id="custom-css-input" value={data.fname}
                                            />
                                        </FormControl>
                                        <FormControl className={classes.margin} style={{ display: 'flex' }}>
                                            <InputLabel

                                                htmlFor="custom-css-input"
                                            >
                                                นามสกุล</InputLabel>
                                            <Input

                                                id="custom-css-input" value={data.lname}
                                            />
                                        </FormControl>
                                        <ExpansionPanel style={{ marginTop: '30px' }}>
                                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                                <Typography className={classes.heading} >ข้อมูลผู้ปกครอง</Typography>
                                            </ExpansionPanelSummary>
                                            <ExpansionPanelDetails>
                                                <Typography>
                                                    <div>
                                                        {(data.school.inCountry === false)
                                                            ? <div>
                                                                <div>
                                                                    <FormControl className={classes.formControl} style={{ display: 'flex' }}>
                                                                        <InputLabel htmlFor="controlled-open-select-sex">รายชื่อผู้ปกครอง</InputLabel>
                                                                        <Select
                                                                            onClose={this.handleCloseSexForm}
                                                                            onOpen={this.handleOpen}
                                                                            onChange={this.handleChangeSexForm}
                                                                            value={this.state.sex}
                                                                            inputProps={{
                                                                                name: 'sex',
                                                                                id: 'controlled-open-select-sex',
                                                                            }}

                                                                        >
                                                                            {data_workers.map((dataW) => (
                                                                                <MenuItem value={dataW}>{dataW.fname}</MenuItem>
                                                                            ))}
                                                                        </Select>
                                                                    </FormControl>
                                                                </div>
                                                            </div>
                                                            : <div>แสดงข้อมูล</div>}
                                                    </div>

                                                </Typography>
                                            </ExpansionPanelDetails>
                                        </ExpansionPanel>
                                        <FormControl className={classes.formControl} style={{ display: 'flex' }}>
                                            <InputLabel htmlFor="controlled-open-select-age" > อายุ </InputLabel>
                                            <Select
                                                onClose={this.handleCloseAge}
                                                onOpen={this.handleOpenAge}
                                                value={this.state.age}
                                                onChange={this.handleChangeAge}
                                                inputProps={{
                                                    name: 'age',
                                                    id: 'controlled-open-select-age',
                                                }}

                                            >
                                                <MenuItem value={1}>1 ปี</MenuItem>
                                                <MenuItem value={2}>2 ปี</MenuItem>
                                            </Select>
                                        </FormControl>
                                        <div style={{ display: 'flex', marginTop: '20px' }}>
                                            <form className={classes.container} noValidate>
                                                <TextField
                                                    id="datetime-local"
                                                    label="Next appointment"
                                                    type="datetime-local"
                                                    defaultValue="2017-05-24"
                                                    className={classes.textField}
                                                    InputLabelProps={{
                                                        shrink: true,
                                                    }}
                                                />
                                            </form>
                                        </div>
                                        <ExpansionPanel style={{ marginTop: '30px' }}>
                                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                                <Typography className={classes.heading} >ข้อมูลผู้การศึกษา</Typography>
                                            </ExpansionPanelSummary>
                                            <ExpansionPanelDetails>
                                                <Typography style={{ width: '100%' }}>
                                                    <div>
                                                        {(data.school.inCountry === false)
                                                            ? <div> <FormControl className={classes.margin} style={{ display: 'flex' }}>
                                                                <InputLabel

                                                                    htmlFor="custom-css-input"
                                                                >
                                                                    ชื่อโรงเรียน</InputLabel>
                                                                <Input

                                                                    id="custom-css-input" value={data.school.name}
                                                                />
                                                            </FormControl>
                                                                <FormControl className={classes.margin} style={{ display: 'flex' }}>
                                                                    <InputLabel

                                                                        htmlFor="custom-css-input"
                                                                    >
                                                                        ชั้นปี</InputLabel>
                                                                    <Input

                                                                        id="custom-css-input" value={data.school.level}
                                                                    />
                                                                </FormControl>
                                                                <FormControl className={classes.margin} style={{ display: 'flex' }}>
                                                                    <InputLabel

                                                                        htmlFor="custom-css-input"
                                                                    >
                                                                        ปีการศึกษา</InputLabel>
                                                                    <Input

                                                                        id="custom-css-input" value={data.school.year}
                                                                    />
                                                                </FormControl></div>
                                                            : <div>แสดงข้อมูล</div>}
                                                    </div>
                                                </Typography>
                                            </ExpansionPanelDetails>
                                        </ExpansionPanel>
                                        <div style={{ float: 'right' }}>
                                            <Button variant="contained" size="small" className={classes.button} style={{
                                                background: 'linear-gradient(to right, rgb(212,242,205) 0%,#f2b9ae 100%)'
                                            }}>
                                                <Save className={classNames(classes.leftIcon, classes.iconSmall)} />
                                                Save</Button>
                                        </div>
                                    </div>
                                </Typography>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                    </div>
                ))}
            </div>
        );
    }
}

DataForm.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DataForm);