import React from 'react'
import WeatherForecastServiceClient from '../services/WeatherForecastServiceClient'
import WeatherForecastPanel from './WeatherForecastPanel'
import WeatherValuesPanel from './WeatherValuesPanel'
import { TextField, Button } from '@material-ui/core'

export default class WeatherForecast extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            locationName: "",
            temperatureSlots: ['-', '-', '-'],
            weatherValueSlots: ['-', '-', '-'],
            selectingLocationName: ""
        }
    }

    onSelectedLocationName = () => {
        WeatherForecastServiceClient.post("/forecastInfo", { locationName: this.state.selectingLocationName }).then((res) => {
            this.setState({
                locationName: res.data.locationName,
                temperatureSlots: res.data.temperatures,
                weatherValueSlots: res.data.weatherValues
            })
            console.log(this.state)
        })
    }

    onLocationNameChange = (event) => {
        this.setState({ selectingLocationName: event.target.value });
    }
 
    newLocationName = (event) => {
        this.setState({ locationName: "" });
    }

    render() {
        if (this.state.locationName !== "") {
            return (
                <React.Fragment>
                    <h1>Welcome to the Weather Forecast of {this.state.locationName}</h1>
                    <WeatherForecastPanel temperatureSlots={this.state.temperatureSlots}></WeatherForecastPanel>
                    <WeatherValuesPanel weatherValueSlots={this.state.weatherValueSlots}></WeatherValuesPanel>
                    <Button variant="contained" color="secondary" onClick={(ev) => this.newLocationName()}>
                            New Serach
                    </Button>                    
                </React.Fragment>
            )
        } else {
            return (
                <React.Fragment>
                    <h1>Welcome to the Weather Forecast</h1>
                    <h2>Insert a location to continue</h2>
                    <TextField
                        id="standard-basic"
                        label="Location"
                        margin="normal"
                        onChange={(ev) => this.onLocationNameChange(ev)}
                    />
                    <div>
                        <Button variant="contained" color="secondary" onClick={(ev) => this.onSelectedLocationName()}>
                            Submit
                        </Button>
                    </div>
                </React.Fragment>
            )
        }
    }

}