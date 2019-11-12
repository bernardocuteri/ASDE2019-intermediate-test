import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import WeatherBaseInstance from './http-client/WeatherBaseInstance';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import CloudIcon from '@material-ui/icons/Cloud';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import Axios from 'axios';
import ApiResults from './ApiResults';

class SearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            location: '',
            showresult: false,
            weather: [],

            weatherFromApi: {
                showresult: false,
                name: '',
                weatherMain: '',
                weatherDescription: '',
                temperature: '',
            }
        }
    }

    getWeather = () => {
        console.log(this.state.location);
        WeatherBaseInstance.get(`/weather?location=${this.state.location}`).then((res) => {
            this.setState({
                weather: res.data,
                showresult: true
            });
        });
    }

    getWeatherFromAPI = () => {
        Axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.location}&appid=b547b68c28e4cdf7de12d7af55efa788`).then((res) => {
            console.log(res.statusCode);
            console.log(res.data);
            this.setState({
                weatherFromApi: {
                    showresult: true,
                    name: res.data.name,
                    weatherMain: res.data.weather[0].main,
                    weatherDescription: res.data.weather[0].description,
                    temperature: res.data.main.temp,
                }
            })
        }).catch((error) => {
            if (error.response) {
                if (error.response.status)
                    alert("Location not found in the OpenWeather Map");
                else
                    alert("Generic error");
                console.log(error.response.status);
            }
        });
    }

    getIcon(description) {
        switch (description) {
            case 'cloudy':
                return <CloudIcon></CloudIcon>;

            case 'sunny':
                return <Brightness7Icon></Brightness7Icon>;
            case 'rainy':
                return <BeachAccessIcon></BeachAccessIcon>
            default:
                return '';
        }

    }

    getWeatherString() {
        return this.state.showresult ? <h1>Weather in {this.state.location}</h1> : '';
    }

    render() {

        return (
            <div>
                <div>
                    <TextField
                        id="outlined-basic"
                        label="Location"
                        margin="normal"
                        variant="outlined"
                        onChange={(e) => { this.setState({ location: e.target.value }) }}
                    />
                </div>
                <div>
                    <Button variant="contained" onClick={() => this.getWeather()}>Get weather</Button>
                </div>
                <div className="mt-1">
                    <Button variant="contained" onClick={() => this.getWeatherFromAPI()}>Get from API</Button>
                </div>
                <br />
                <br />
                <div>
                    {this.getWeatherString()}

                    {this.state.weather.map(forecast =>
                        <div>
                            <h3>{forecast.description} with {forecast.degrees}° degrees {this.getIcon(forecast.description)} </h3>
                        </div>
                    )}
                </div>
                <br></br>
                <ApiResults showresult={this.state.weatherFromApi.showresult} location={this.state.weatherFromApi.name} weatherMain={this.state.weatherFromApi.weatherMain} weatherDescription={this.state.weatherFromApi.weatherDescription} temperature={this.state.weatherFromApi.temperature}></ApiResults>
            </div >
        )
    }
}

export default SearchForm;