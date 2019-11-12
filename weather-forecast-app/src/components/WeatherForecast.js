import React from 'react'
import WeatherForecastServiceClient from '../services/WeatherForecastServiceClient'
import {TextField, Button} from '@material-ui/core'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

export default class WeatherForecast extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            city: "",
            weather: "",
            username: "",
            selectedUsername: "",
            selectedCity: ""
        }
    }

    onCitySelected = () => {
        this.state.city = this.state.selectedCity
        WeatherForecastServiceClient.post("/getWeather", {city: this.state.selectedCity}).then((res) => {
            this.setState({
                weather: res.data.days
            })
        })
    }

    onCityChange = (event) => {
        this.setState({selectedCity: event.target.value});
    }


    onUsernameSelected = () => {
        WeatherForecastServiceClient.post("/selectUser", {username: this.state.selectedUsername}).then((res) => {
            this.setState({
                username: res.data.user                
            })
        })
    }

    onUsernameChange = (event) => {
        this.setState({selectedUsername: event.target.value});
    }

    render()  {

        if(this.state.city !== ""){
            
            return (
                
                <React.Fragment> 
                    <h1>Welcome {this.state.username}</h1>
                    <h2>Insert a City to get 3 days weather prevision</h2>
                    <TextField
                        id="standard_basic_city"
                        label="Insert city"
                        margin="normal"
                        onChange = {(evCity) => this.onCityChange(evCity)}
                    />
                    <div>
                    <Button variant="contained" color="primary" onClick = {(evCity) => this.onCitySelected()}>
                        Search
                    </Button>
                    </div>
                    <div>
                        <div>
                            <Card>
                                <CardActionArea>
                                    <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Today
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {this.state.weather[0].temperature} degree
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {this.state.weather[0].weatherType}
                                    </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>

                            
                        </div>
                        <div>
                            <Card>
                                <CardActionArea>
                                    <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Tomorrow
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {this.state.weather[1].temperature} degree
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                         {this.state.weather[1].weatherType}
                                    </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </div>
                        <div>
                            <Card>
                                <CardActionArea>
                                    <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Day after tomorrow
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {this.state.weather[2].temperature} degree
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                         {this.state.weather[2].weatherType}
                                    </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </div>
                    </div>
                </React.Fragment>
            )
        }
        if(this.state.username !== "")
            return (
                <React.Fragment>
                    <h1>Welcome {this.state.username}</h1>
                    <h2>Insert a City to get 3 days weather prevision</h2>
                    <TextField
                        id="standard_basic_city"
                        label="Insert city"
                        margin="normal"
                        onChange = {(evCity) => this.onCityChange(evCity)}
                    />
                    <div>
                    <Button variant="contained" color="primary" onClick = {(evCity) => this.onCitySelected()}>
                        Search
                    </Button>
                    </div>
                </React.Fragment>
            )
        else
            return(
                <React.Fragment>
                    <h1>Welcome to the Weather app</h1>
                    <h2>Insert a username to start</h2>
                    <TextField
                        id="standard_basic"
                        label="Insert username"
                        margin="normal"
                        onChange = {(ev) => this.onUsernameChange(ev)}
                    />
                    <div>
                    <Button variant="contained" color="primary" onClick = {(ev) => this.onUsernameSelected()}>
                        Start
                    </Button>
                    </div>
                </React.Fragment>
            )
    }
}