import React from 'react'
import AxiosInstance from '../http-client/AxiosInstance';
import { TextField, Grid } from '@material-ui/core';
import Axios from 'axios';

export default class Weather extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            location: "",
            forecast: [],
            weather: ""
        };
    }

    handleSubmit = (e) =>
    {
        if(e.key === "Enter" && e.target.value.length > 0)
        {
            let loc = e.target.value;
            AxiosInstance.post("submitLocation", {location: loc})
            .then((res) => {
                console.log(res.data);
                this.setState({
                    forecast: res.data,
                    location : loc
                })
            });

            Axios.post('https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22')
            .catch( (res) => {
                console.log(res.data);
            })
        }
    }

    render()
    {
        return(
            <div>

                <Grid container justify = "center">
                    <div>
                        <TextField name="location" label="Location" margin="normal"
                            onKeyPress={(event) => this.handleSubmit(event)}
                            />
                    </div>
                </Grid>

                {this.state.forecast.map( (fore, index) => 
                    <Grid key={index} container justify = "center">
                    <div>
                        {index == 0 ? <h4>METEO OGGI</h4> : index == 1 ? <h4>METEO DOMANI</h4> : <h4>METEO DOPODOMANI</h4>}
                        <h5>Temperatura: {this.state.forecast[index].temp}°C</h5>
                        <img src={"/static/"+this.state.forecast[index].weather+".png"} alt="- 0 -" width="20%" />
                    </div>
                    </Grid>
                )}
            </div>
        )
    }
}