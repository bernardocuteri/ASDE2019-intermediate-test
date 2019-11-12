import React from 'react'
import TempAndWeatherOneDay from './TempAndWeatherOneDay'
import BlogServiceClient from '../http-client/BlogServiceClient'
import { TextField, Button } from '@material-ui/core'


export default class Weather extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            cityname: "",
            weatherPrediction: [],
        }
    }


    betHandler = (bettingCoins) => {
        /* SlotMachineServiceClient.post("/bet", {user: this.state.username, bet: bettingCoins}).then((res) => {
             this.setState({
                 coins: res.data.remainingCoins,
                 slots: res.data.slots
             })
         })*/
    }


    onSelectedUsername = () => {
        BlogServiceClient.getWheather(this.state.cityname).then((res) => {

            console.log(res.data);


            this.setState({
                weatherPrediction: res.data
            });


            //this.updateUsers();


        })


        //var openweathermapKey = "ce2ed02687e124b11c4a3a8eb72eb60b";
        //var webadressOpenWeatherMap = "https://api.openweathermap.org/data/2.5/weather?q="+this.state.cityname+",uk&appid=ce2ed02687e124b11c4a3a8eb72eb60b"


    }

    refreshTheView = () => {
      
            this.setState({
                cityname: "",
                weatherPrediction: []
            });


    }

    onUsernameChange = (event) => {
        this.setState({ cityname: event.target.value });
    }

    render() {

        

        if (this.state.weatherPrediction.length !== 0) {
            return (
                <React.Fragment >

                    <h1>This is the Weather for the City: {this.state.cityname}</h1>


                    <TempAndWeatherOneDay  weatherPrediction={this.state.weatherPrediction[0] } day="To Day"></TempAndWeatherOneDay>
                    <TempAndWeatherOneDay  weatherPrediction={this.state.weatherPrediction[1]} day="Tomorrow" ></TempAndWeatherOneDay>
                    <TempAndWeatherOneDay  weatherPrediction={this.state.weatherPrediction[2] } day="The day after"></TempAndWeatherOneDay>


                    <Button variant="contained" color="secondary" onClick={(ev) => this.refreshTheView()}>
                            Enter other city
                        </Button>

                </React.Fragment>


            )
        }
        else {
            return (
                <React.Fragment>
                    <h1>Welcome to Weather forecast app</h1>
                    <h2>Enter the location for obtain the weather</h2>
                    <TextField
                        id="standard-basic"
                        label="City Name"
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


    }
}