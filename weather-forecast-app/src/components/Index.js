import React from 'react';
import WeatherGetter from './WeatherGetter';
import Forecast from './Forecast';

import BaseInstance from '../http-client/BaseInstance'
import axios from 'axios';

class Index extends React.Component {
    state = { 
        location: "",
        selectingLocation: "",
        weather: [],
    }

    handleOnChangingLocation = (e) => {
        this.setState({
            selectingLocation: e.target.value,
        })
    }

    handleOnClickGetWeather = () => {

        BaseInstance.post("forecast", {location: this.state.selectingLocation}).then(res => {
            this.setState({
                location: this.state.selectingLocation,
                weather: res.data,
            })
        })
    }

    handleOnClickTodayForecast = () => {
        
        axios.get("https://api.openweathermap.org/data/2.5/weather", {cityname: this.state.selectingLocation}).then(res => {
            console.log(res.data)
        })
    }

    render() { 
            return ( 
                <div>
                    <h1>Select a location to get the next 3 days weather</h1>
                    <WeatherGetter handleOnChangingLocation={this.handleOnChangingLocation}
                        handleOnClickGetWeather={this.handleOnClickGetWeather}
                        handleOnClickTodayForecast = {this.handleOnClickTodayForecast}/>
                    <Forecast weather={this.state.weather}/>
                </div> 
            );
    }
}
 
export default Index ;