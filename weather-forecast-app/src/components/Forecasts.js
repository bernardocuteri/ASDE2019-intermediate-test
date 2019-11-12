import React from 'react';
import Forecast from './Forecast';
export default class Forecasts extends React.Component {

    render() {
        return (
            <div>
                <p>Weather in {this.props.location}</p>
                {
                    this.props.forecasts.map((forecast) =>
                        <Forecast key={forecast.day} data={forecast}></Forecast>
                    )
                }
            </div>
        )
    }
}