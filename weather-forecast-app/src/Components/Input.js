import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
}));

export default function BasicTextFields(props) {
    const classes = useStyles();

    return (
        <form className={classes.container} noValidate autoComplete="off">
            <div>
                <TextField
                    name="location"
                    id="standard-basic"
                    className={classes.textField}
                    label="Standard"
                    margin="normal"
                    onChangeInput={props.onChange}
                />
            </div>
            <div>
                <Button
                    variant="contained"
                    color="default"
                    startIcon={<CloudUploadIcon />}
                >
                    Add
                </Button>
            </div>
        </form>
    );
}