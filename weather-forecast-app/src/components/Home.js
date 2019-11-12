import React from 'react';
import BaseInstance from '../http-client/BaseInstance';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import Forecasts from './Forecasts';
const divStyle = {
    textAlign: 'center'
}

export default class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            location: "",
            forecasts: "",
            locationTextField: ""
        }
    }
    
    _handleTextFieldChange = (res) =>{
        this.setState({
            locationTextField : res.target.value
            
        });
    }
    
    submitLocation=()=>{
        BaseInstance.post("/getWeather", {location:this.state.location} ).then((res)=>{
            this.setState({
                forecasts: res.data.forecasts,
                location: this.state.locationTextField
            })
        });
    }

    render() {
        return (
            <div style={divStyle}>
                <div style={divStyle}>
                    <TextField
                        required
                        id="standard-required"
                        label="Location"
                        type='search'
                        margin="normal"
                        onChange={this._handleTextFieldChange}
                    />
                    <div>
                        <Fab
                            variant="extended"
                            size="medium"
                            color="primary"
                            aria-label="add"
                            onClick={this.submitLocation}
                        >
                            Select
                        </Fab>
                    </div>
                </div>
                <div>
                    {this.state.forecasts !== "" && 
                    <div><Forecasts forecasts = {this.state.forecasts} location = {this.state.location}/></div>}
                </div>
            </div>
        )
    }
}