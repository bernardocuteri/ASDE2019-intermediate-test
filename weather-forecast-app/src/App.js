import React from 'react';
import './App.css';
import ShowForecast from './Components/ShowForecasts';
import SearchLocation from './Components/SearchLocation';
import axios from 'axios';

class App extends React.Component{

  constructor(){
    super();
    this.state = {
      location : "",
      forecasts : [],
      realTemperatureToday : -1,
      realWeatherToday : "" 
    }
  }

  render(){
    return(
    this.state.location === "" || !this.state.forecasts ?
       <SearchLocation updateLocation = {this.updateLocation}/>
      :
      <div>
        <SearchLocation updateLocation = {this.updateLocation}/>
        <ShowForecast realWeatherToday = {this.state.realWeatherToday} realTemperatureToday = {this.state.realTemperatureToday} forecasts = {this.state.forecasts} location = {this.state.location}/>
      </div>
      );
  }


  updateLocation = (eventLocation) =>{
    console.log(eventLocation)

    axios.post('http://localhost:8080/requestForecasts',{location:eventLocation})
    .then(res => {
      console.log(res.data["forecasts"]);
            this.setState({
              location:eventLocation,
              forecasts : res.data["forecasts"]
            }
            );
        
    })  
    
    axios.get('http://api.openweathermap.org/data/2.5/weather?q='+eventLocation+'&APPID=f53f2be3a2adcc87c060829f808f5b72')
    .then(res => {
      this.setState({
        realTemperatureToday : res.data["main"]["temp"],
        realWeatherToday : res.data["weather"][0]["main"] 
      }) 
    })  



  }

  getForecasts = () => {
    if (this.state.location == "")
      return "";
    return <ShowForecast/>
  }
}



export default App;
