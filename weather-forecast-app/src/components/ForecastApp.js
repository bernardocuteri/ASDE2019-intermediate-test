import React from 'react';
import "./forecast_app.css";
import SearchAppBar from './SearchAppBar';
import ForecastAppServiceClient from '../services/ForecastAppServiceClient';
import SpacingGrid from './SpacingGrid';
export default class ForecastApp extends React.Component {


        constructor(props) {
            super(props)
            this.state = {
                city: 'City',
                w: ["Sunny", "Sunny", "Sunny"],
                t: ["0", "0", "0"], 
                searched: 'False'
            }
        }

        render() {
          
                return(
                    <React.Fragment>
                        <h1 className="title">Welcome to the ForecastApp</h1>
                        <SearchAppBar search={this.search} onCityChanged={this.onCityChanged}/>
                        <SpacingGrid weathers={this.state.w} temperatures={this.state.t}/>
                    </React.Fragment>
                )
            
        }

        search = () => {
            console.log("search");
           ForecastAppServiceClient.post("/forecast", {city: this.state.city}).then((res) => {
               this.setState ({
                   w: res.data.weathers,
                   t: res.data.temperatures,
                   searched: "True"
               })
           })
        }

        onCityChanged = (e) => {
            this.setState ({
                city: e.target.value
            })
        }
}