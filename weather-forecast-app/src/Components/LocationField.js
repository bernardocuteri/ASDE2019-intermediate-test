import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

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

export default class LocationFiels extends React.Component {
    
  render(){
        return (
                <TextField
                id="standard-basic"
                className={useStyles.textField}
                label="Location"
                margin="normal"
                onChange={(event)=>this.props.handleChange(event.target.value)}
                />
        );
    }
  
}