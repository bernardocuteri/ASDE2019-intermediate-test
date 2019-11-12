import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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
  button: {
    margin: theme.spacing(1),
  },
  input:{
      display: 'none',
  },
}));

export default function WeatherGetter(props) {

    const classes = useStyles();

    return(
        <div>
            <TextField className={classes.textField} label="Location" margin="normal" onChange={props.handleOnChangingLocation}></TextField>
            <Button variant="outlined" className={classes.button} onClick={props.handleOnClickGetWeather}>GET</Button>
            <Button variant="outlined" className={classes.button} onClick={props.handleOnClickTodayForecast}>TODAY FORECAST</Button>
        </div>
    )

}