import React from 'react';
import WeatherForecastService from '../Service/WeatherForecastService';
import WeatherForecastRequest from '../Service/WeatherForecastRequest';
	


class WeatherForecast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            location: 'no location selected',
            forecast: 'no data displayed'
        }
        this.onChangeEvent = this.onChangeEvent.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit = (event) => {
        event.preventDefault();
        WeatherForecastRequest.cityRequest(this.state.location).then((res) => {
            this.setState({
                forecast: res.data
            })
        })

    }

    onChangeEvent = (event) => {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {


        return (
            <div class='searchForm'>
                <h1> Welcome to the Weather Forecast </h1>
                <h2> Please select your location: </h2>
                <h3> Current Location: {this.state.location} </h3>
                <text>Possible locations: Rende, Frankfurt, Butzbach, Rome</text>
                <form> 
                    <input name='location' onChange={this.onChangeEvent}></input>
                    <input type='submit' onClick={this.onSubmit}></input>
                </form>
                <h1>Forecast: {this.state.forecast}</h1>

            </div>
        )
    }
}

export default WeatherForecast;