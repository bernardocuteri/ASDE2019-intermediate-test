import React from 'react';

export default class Forecast extends React.Component{

    renderValue(){
        if(this.props.data.value === "sunny")
        return <img src={require("./images/sunny.jpeg")}height="50" width="50" />
        if(this.props.data.value === "coludy")
        return <img src={require("./images/cloudy.jpeg")}height="50" width="50" />
        return <img src={require("./images/rain.jpeg")}height="50" width="50" />
    }
    render(){
        return(
        <div>
            <h3>{this.props.data.day}</h3>
            <p>Weather {this.props.data.value} {this.renderValue()}</p>
            <p>Temperature {this.props.data.temperature}°C</p>
        </div>
        )
    }
}