import React from 'react'
import BaseInstance from '../http-client/BaseInstance';
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

export default class Body extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            location: props.location,
            day1_temperature: "",
            day1_weather: "",
            day2_temperature: "",
            day2_weather: "",
            day3_temperature: "",
            day3_weather: "",
            canRender: false
        }
    }

    getForecast = () => {
        BaseInstance.post("get-forecast", {
            location: this.state.location
        }).then((res) => {
            console.log(res.data)
            this.setState({
                day1_weather: res.data[0].weather,
                day2_weather: res.data[1].weather,
                day3_weather: res.data[2].weather,
                day1_temperature: res.data[0].temperature,
                day2_temperature: res.data[1].temperature,
                day3_temperature: res.data[2].temperature,
                canRender: true
            })
        })
    }

    handleKeyPress = event => {
        if (event.key === 'Enter') {
            this.getForecast()
        }
    }

    componentDidMount() {
        this.getForecast()
    }

    setLocation = (event) => {
        this.setState({
            location: event.target.value
        })
    }

    render() {
        if (this.state.canRender) {
            return (
                <div>
                    <h1 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        {this.state.day1_weather} {this.state.day1_temperature}
                    </h1>
                    <h1 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        {this.state.day2_weather} {this.state.day2_temperature}
                    </h1>
                    <h1 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        {this.state.day3_weather} {this.state.day3_temperature}
                    </h1>
                    
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                    <TextField id="outlined"
                        label="Search another location"
                        margin="normal"
                        variant="outlined"
                        onChange={this.setLocation}
                        onKeyPress={this.handleKeyPress}></TextField></div>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                    <Button onClick={this.getForecast}>Refresh</Button></div>

                </div>
            );

        } else {
            return (
                <div></div>
            );
        }
    }

}