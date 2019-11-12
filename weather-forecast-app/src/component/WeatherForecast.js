import React from 'react'
import Forecast from './Forecast'
import { TextField, Button } from '@material-ui/core'

import WeatherForecastServiceClient from '../services/WeatherForecastServiceClient'

export default class WeatherForecast extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            forecast: [],
            location: "",
            search: false,
        }
    }
    
    onLocationChange = (ev) => {
        this.setState({
            location: ev.target.value,
            search: false,
        })
    }
    
    onSelectedLocation = (location) => {
        WeatherForecastServiceClient.post("/forecast", {city: this.state.location}).then((res) => {
            this.setState({
                forecast: res.data.forecast
            })
            //console.log(this.state.forecast[0].condition)
            this.setState({
                search: true,
            })
        })
    }

    render() {
        return (

            <React.Fragment>
                <h1>Weather Forecast</h1>
                <h2>Please, select a location</h2>
                <TextField
                    id="standard-basic"
                    label="Location"
                    margin="normal"
                    onChange={(ev) => this.onLocationChange(ev)}
                />
                <div>
                    <Button variant="contained" color="secondary" onClick={(ev) => this.onSelectedLocation()}>
                        Search
                    </Button>
                </div>
                {this.state.location != "" && this.state.search === true && <Forecast location={this.state.location} forecast={this.state.forecast}/>}
            </React.Fragment>

        )
    }
}