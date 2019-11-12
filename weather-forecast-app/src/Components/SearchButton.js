import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));

export default class SearchButton extends React.Component {
    render(){

        return (
            <div>
            <Button variant="contained" color="primary" className={useStyles.button} onClick={(event)=>{this.props.handleClick()}}>
                Search
            </Button>
            </div>
        );
    }
}