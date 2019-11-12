import React from 'react'
import TextField from '@material-ui/core/TextField'
import SearchAppBar from './SearchAppBar'
import Body from './Body'

export default class MyForecastApp extends React.Component {

    constructor() {
        super()
        this.state = {
            location: ""
        }
    }

    setLocation = (param) => {
        console.log("myfore : " + param)
        this.setState({
            location: param
        })
    }



    render() {
        return (
            <div>
                <SearchAppBar setLocation={this.setLocation} />
                {this.state.location !== "" && <Body location={this.state.location} setLocation={this.setLocation}/>}
            </div>
        );
    }

}