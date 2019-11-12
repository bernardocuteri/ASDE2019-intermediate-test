import React from 'react'
import WeatherForecastServiceClient from '../services/WeatherForecastServiceClient'

export default class SlotMachine extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            location: "",
            weather: ["", "", ""]
        }
    }


    locationHandler = (event) => {
        WeatherForecastServiceClient.post("/post", {location: event.target.value}).then((res) => {
            this.setState({
                location: res.data.location,
                weather: res.data.weather
            })
            alert(this.state.location)
        })
    }

    render() {
        return (
            <React.Fragment>
                <h1>Weather Forecast</h1>
                <div id="main">
                    <form onSubmit={(ev) => this.locationHandler(ev)}>
                        Enter location: <input type="text" />
                        <input type="submit" />
                    </form>
                    <p>Location: {this.state.location} Weather: {this.state.weather}</p>
                </div>
            </React.Fragment>
        )
    }
}