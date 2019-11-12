import React, { Component } from 'react';
import cloud from './../images/cloud.png'
import rain from './../images/cloud.png'
import sun from './../images/cloud.png'

class WeatherForecastDisplay extends Component {

    constructor(props) {
        super(props);
        this.state = {
            images: []
        }
        if (props.weather_value === "rain") {
            this.setState({
                image: rain
            });
        }

        if (props.weather_value === "sun") {
            this.setState({
                image: sun
            });
        }

        if (props.weather_value === "cloud") {
            this.setState({
                image: cloud
            });
        }
        console.log(props);
    }

    render() {
        return (
            <img src={this.state.image}></img>
        );
    }
}

export default WeatherForecastDisplay;