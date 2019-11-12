import React from 'react'

import WeatherForecastBaseInstance from 'src/http-clienthttp-client/WeatherForecastBaseInstance.js'
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import sunny from './sunny.jpg';
import rainy from './rainy.jpg';
import cloudy from './cloudy.jpg';
export default class App extends React.Component {


  constructor() {
      super();
      /*this.username = React.createRef();
      this.password = React.createRef();*/
      this.state = {
        location : "",
        today : "",
        tomorrow: "",
        dayAfter: "",
        info: []
      }
      }


    render() {
          return (

          <div>
            <form>
              <TextField id="Location" label="Location" margin="normal" onChange={(event) => this.handleChange(event)}/> <br></br>
              <Button variant="contained" color="primary" onClick = {(event) => this.search(event)}> Cerca </Button>
            </form><br></br>
            <Paper>
            <Table size="small" aria-label="a dense table">
              <TableHead>
                <TableRow>
                  <TableCell align="right">Day</TableCell>
                  <TableCell align="right">Weather</TableCell>
                  <TableCell align="right">Temperture</TableCell>
                </TableRow>
              </TableHead>
              {this.state.info.map(item => (
                <TableRow>
                  <TableCell align="right">{item.time}</TableCell>
                  <TableCell align="right">{item.weather}</TableCell>
                  <TableCell align="right">{item.temperature}</TableCell>
                </TableRow>
                ))}
              </Table>


            </Paper>
          </div>
          )
        }



    handleChange = (event) =>
    {
      console.log(event.target.value);
      this.setState({
        location: event.target.value
      });
    }

    search = (event) =>
    {
        console.log(this.state.location);
        if(this.state.location !== ""){
        WeatherForecastBaseInstance.post('/getWeather', null, {
          params : {
            "location" : this.state.location
          }
        }).then(response => {
            this.setState({
             info: response.data,
           });
        });
      }
      console.log(this.state.info);
      event.preventDefault();
    }


}
