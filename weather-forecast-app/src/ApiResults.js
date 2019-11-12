import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import WeatherBaseInstance from './http-client/WeatherBaseInstance';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import CloudIcon from '@material-ui/icons/Cloud';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import Axios from 'axios';
class SearchForm extends React.Component {
    constructor(props) {
        super(props);
    }

    fromKelvinToCelsius(degrees) {
        return (degrees - 273.15).toFixed(2);
    }
    render() {

        return (
            this.props.showresult ? <div>
                <h1>Real-time Weather in {this.props.location}</h1>
                <h3>It's {this.props.weatherMain} ({this.props.weatherDescription})</h3>
                <h3>{this.props.temperature}° K</h3>
                <h3>{this.fromKelvinToCelsius(this.props.temperature)}°C</h3>
            </div > : <div></div>
        )
    }
}

export default SearchForm;