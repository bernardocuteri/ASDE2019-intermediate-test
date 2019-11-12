import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import sunnyImage from './../Image/sun.jpg';
import rainyImage from './../Image/rainyImage.jpg';
import cloudyImage from './../Image/cloudyImage.jpg';



class ShowForecast extends React.Component{

    constructor(props){
        super(props);
    }

    

    render(){
        return  (
            <div>
                <div>
                    <h2> You are seeing forecasts about {this.props.location}</h2>
                </div>
                <Paper >
                    <Table aria-label="simple table">
                        <TableHead>
                        <TableRow>
                            <TableCell>Day</TableCell>
                            <TableCell align="right">Weather</TableCell>
                            <TableCell align="right">Temperature</TableCell>
                            <TableCell align ="right"> Image </TableCell>
                            
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        <TableRow>
                            <TableCell component="th" scope="row">API Weather</TableCell>
                            <TableCell align="right">{this.props.realWeatherToday}</TableCell>
                            <TableCell align="right">{this.props.realTemperatureToday} Kelvin</TableCell>
                            <TableCell align ="right"><img src = {this.getpath(this.props.realWeatherToday)} width="200" height="150"/></TableCell>

                        </TableRow>
                        {this.props.forecasts.map((row,index) => (
                            <TableRow key={index}>
                            <TableCell component="th" scope="row">
                                {index == 0 ? "today" : index == 1 ? "tomorrow" : "the day after"}
                            </TableCell>
                            <TableCell align="right">{row.weather} </TableCell>
                            <TableCell align="right">{row.temperature} Degree</TableCell>
                            <TableCell align ="right"><img src = {this.getpath(row.weather)} width="200" height="150"/></TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </Paper>
            </div>
            
        );
            
        
    }

    getpath = (weather) => {
        if(weather === "cloudy" || weather === "Clouds" )
            return cloudyImage;
        if(weather === "rainy"  || weather === "Rain")
            return rainyImage;
        return sunnyImage;
    }
}


export default ShowForecast;
