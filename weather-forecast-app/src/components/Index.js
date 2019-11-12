import React from 'react'
import BaseInstance from '../http-client/BaseInstance'


class Index extends React.Component{
    
    constructor(probs){
        super(probs)
        this.state = {
            location:"",
            changinglocation:"",
            temps:[],
            weath:["","",""],

        }
    }
    
    onChangeLocation = (e) => {
        this.setState({
            changinglocation: e.target.value
        })
    }


    howIsWeather = () => {
        BaseInstance.post('howIsWeather', {location: this.state.changinglocation}).then((res) => {
            this.setState({
                location:res.data.location,
                temps:res.data.temps,
                weath:res.data.weath
            })
        })
    }


    render(){
            return(
            <div>
                <div>
                    <div className="form-group">
                        <input type="text" placeholder="Search Location" onChange={this.onChangeLocation}></input>    
                    </div>
                    <button className="btn btn-primary" onClick={this.howIsWeather}>Search</button>
                </div>
            
                <div>
                    <h3>In the city of {this.state.changinglocation} the weather of today,tomorrow and after tomorrow is:</h3>
                    <div className="container">
                        <div className="row">
                            <h2>Temperatures:</h2>
                            {this.state.temps.map(temp => <div className="col-4"><h2><b>{temp}</b></h2></div>)}
                         </div>
                         <div className="row">
                            <h2>Weather:</h2>
                            {this.state.weath.map(w => <div className="col-4"><h2><b>{w}</b></h2></div>)}
                         </div>
                     </div>
                </div>
            </div>
            )
    }
}

export default Index;