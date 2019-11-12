import React from 'react';
import logo from './logo.svg';
import './App.css';
import LocationField from './Components/LocationField'
import SearchButton from './Components/SearchButton'
import ForecastsBaseInstance from './Components/ForecastsBaseInstance'
import ForecastView from './Components/ForecastView'
import API from './APIBaseInstance'

class App extends React.Component {

  constructor(){
    super();
    this.state={
      location:"",
      forecasts:[]
    }
  }
  changeLocation=(location_)=>{
    console.log(this.state.location)
    this.setState({
      location:location_
    })
  }
  getForecasts=()=>{

      ForecastsBaseInstance.get("getForecasts",{
        params:{
          location:this.state.location
        }
      }).then((res)=>{
        console.log(res.data)
        this.setState({
          forecasts:res.data
        })
      })
      API.get("weather",{
        params:{
          q:this.state.location
        }
      }).then((res)=>{
        console.log(res.data)
      })
  }
  render_live_forecast = ()=>{
  
  }
  render_forecasts = ()=>{
    
    if(this.state.forecasts.length>0)
      return (
        <div>
          {this.render_forecast(this.state.forecasts[0],"today")}
          {this.render_forecast(this.state.forecasts[1],"tomorrow")}
          {this.render_forecast(this.state.forecasts[0],"day after tomorrow")}
          {this.render_live_forecast()}
        </div>
      )
  }
  render_forecast=(forecast,title_)=>{
    return (<ForecastView title={title_} value={forecast.value} temperature={forecast.temperature}/>)
  }
  render(){

    return (
      <div className="App">
        <LocationField handleChange={this.changeLocation}/>
        <SearchButton handleClick={this.getForecasts}/>
        {this.render_forecasts()}         
      </div>
    );
  }

}

export default App;
