import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import weatherForecastBaseInstance from './../http-client/weather-forecast-base-instance'
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import WeatherForecastDisplay from "./WeatherForecastDisplay"
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

class WeatherForecast extends Component {

    constructor(props) {
        super(props);
        this.state = {
            location_name: "",
            temperatures: [],
            weather_values: [],
            images: [],
            render_weather: false
        }
    }

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    onSubmit = (event) => {
        weatherForecastBaseInstance.get('getWeatherForecast', {
            params: {
                "location_name": this.state.location_name
            }
        }).then(response => {
            this.setState({
                location_name: response.data.location_name,
                temperatures: response.data.temperatures,
                weather_values: response.data.weather_values
            });
        });
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <Grid>
                    <Grid item xs={3}>
                        <TextField
                            name="location_name"
                            onChange={this.onChange}
                            id="outlined-basic"
                            label="Location Name"
                            margin="normal"
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <Button
                            variant="outlined"
                            size="large"
                            color="primary"
                            onClick={this.onSubmit}
                        >
                            Search
                        </Button>
                    </Grid>
                </Grid>
                <Paper>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">Today</TableCell>
                                <TableCell align="center">Tomorrow</TableCell>
                                <TableCell align="center">The Day After</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell align="center">
                                    {this.state.temperatures[0]}° /
                                    {this.state.weather_values[0]}
                                    <WeatherForecastDisplay
                                        weather_value={this.state.weather_values[0]}
                                    />
                                </TableCell>
                                <TableCell align="center">
                                    {this.state.temperatures[1]}° /
                                    {this.state.weather_values[1]}
                                    <WeatherForecastDisplay
                                        weather_value={this.state.weather_values[1]}
                                    />
                                </TableCell>
                                <TableCell align="center">
                                    {this.state.temperatures[2]}° /
                                    {this.state.weather_values[2]}
                                    <WeatherForecastDisplay
                                        weather_value={this.state.weather_values[2]}
                                    />
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </Paper>
            </div>
        );
    }
}

export default WeatherForecast;