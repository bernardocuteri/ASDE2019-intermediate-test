// JavaScript source code
import React from 'react'
import WeatherForecastServiceClient from '../services/WeatherForecastServiceClient'
import { TextField, Button } from '@material-ui/core'

export default class WeatherForecast extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            city: "",
            selectingCity: "",
        }
    }

	onCityChange = (event) => {
        this.setState({ selectingCity: event.target.value });
    }

	render() {
		return (
				<React.Fragment>
					<h1>Welcome to the WeatherForecastApp</h1>
				</React.Fragment>
				);
		}
	}
/*
        if (this.state.city !== "") {
            return (
                <React.Fragment>
                    <h1>Welcome to the WeatherForecastApp</h1>
                </React.Fragment>
            )
        } else {
            return (
                <React.Fragment>
                    <h1>Welcome to the WeatherForecastApp</h1>
                    <h2>Select a city to get the forecast!</h2>
                    <TextField
                        id="standard-basic"
                        label="Select a city"
                        margin="normal"
                        onChange={(ev) => this.onUsernameChange(ev)}
                    />
                    <div>
                        <Button variant="contained" color="secondary" onClick={(ev) => this.onSelectedUsername()}>
                            Submit
                        </Button>
                    </div>
                </React.Fragment>
            )
        }
    }*/