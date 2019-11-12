import React from 'react';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import CloudIcon from '@material-ui/icons/Cloud';
import ShowChartIcon from '@material-ui/icons/ShowChart';





export default class TempAndWeatherOneDay extends React.Component {

    render() {

        if(this.props.weatherPrediction.weather === "sunny"){
            return (
                <div style={{ textAlign: "left" }}>
                    <h2>Wheather for {this.props.day}: Temperature {this.props.weatherPrediction.temperature} : Weather {this.props.weatherPrediction.weather} <WbSunnyIcon></WbSunnyIcon></h2>

                    
                </div>

            )
        }
        if(this.props.weatherPrediction.weather === "cloudy"){
            return (
                <div style={{ textAlign: "left" }}>
                    <h2>Wheather for {this.props.day}: Temperature {this.props.weatherPrediction.temperature} : Weather {this.props.weatherPrediction.weather} <CloudIcon></CloudIcon></h2>

                   
                </div>

            )
        }
       else{
            return (
                <div style={{ textAlign: "left" }}>
                    <h2>Wheather for {this.props.day}: Temperature {this.props.weatherPrediction.temperature} : Weather {this.props.weatherPrediction.weather}  <ShowChartIcon></ShowChartIcon></h2>

                    
                </div>

            )
        }
            
        

    }
}