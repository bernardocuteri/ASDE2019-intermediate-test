import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Button, TextField } from '@material-ui/core';
import axios_conection from '../conection/axios_conection';



export default class Body extends React.Component {

    constructor() {
        super();
        this.state = {
            city: "",
            cityNameChange: "",
            weathers: []
        }
    }


    onCityNameChange = (ev) => {

        this.setState({ cityNameChange: ev.target.value });

        setTimeout(function () { //Start the timer
            //After 0.5 second
            console.log('cityNameChange: ' + this.state.cityNameChange);
        }.bind(this), 500);

    }


    onSelectedCity = () => {
        axios_conection.get("/getWeather", { params: { city: this.state.city } }).then((res) => {
            this.setState({
                city: res.data.cityName,
                weathers: res.data.weatherConditions
            })
        })
    }


    render() {
        if (this.state.userName !== "") {

            const weatherTable = this.state.weathers.map((weatherItem, i) => {
                return (
                    <ul>
                        <li>
                            <h2>Today the temperature is: {weatherItem[0].temperature} and the condition is {weatherItem[0].condition}</h2>
                        </li>
                        <li>
                            <h2>Tomorrow the temperature is: {weatherItem[1].temperature} and the condition is {weatherItem[1].condition}</h2>
                        </li>
                        <li>
                            <h2>Day After Tomorrow the temperature is: {weatherItem[2].temperature} and the condition is {weatherItem[2].condition}</h2>
                        </li>
                    </ul>
                )
            });
        } 


        return (

            <Grid style={{ textAlign: "center" }} container spacing={2}>
                <Grid item xs={12}>

                    <React.Fragment>
                        <div>
                            <h1 >Look for weather conditions</h1>
                            <h2 >Write the name of the city below</h2>

                            <TextField
                                id="standard-basic"
                                label="City"
                                margin="normal"
                                align="center"
                                onChange={(ev) => this.onCityNameChange(ev)}
                            />
                        </div>

                        <div>
                            <Button variant="contained" color="primary" onClick={(event) => this.onSelectedUsername(event)}>
                                Get Weather
                        </Button>
                        </div>

                    </React.Fragment>



                </Grid>

                <Grid item xs={12}>

                </Grid>

                <Grid item xs={12}>
                    <Grid container justify="space-between" spacing={1}>
                        {['today', 'tomorrow', 'day after tomorrow'].map(value => (
                            <Grid key={value} item>
                                <Button>weather {value}</Button>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid >
        );

    }


}