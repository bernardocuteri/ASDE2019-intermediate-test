import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


class SearchLocation extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <div>
                    <TextField
                    id="outlined-basic"
                    label="Location"
                    margin="normal"
                    variant="outlined"
                    onChange = {this.updateText}
                    />
                </div>
                <div>
                    <Button variant="contained" color="primary" onClick = {() => this.props.updateLocation(this.state.currentLoc)}>
                        Search
                    </Button>
                </div>
                </div>    
            );
    }

    updateText = (textChanged) =>{
        this.setState({
            currentLoc : textChanged.target.value
        });
    }

    
}

export default SearchLocation;