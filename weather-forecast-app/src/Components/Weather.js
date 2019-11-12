import React from 'react';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Table from '@material-ui/core/Table';
import Rain from './../Images/rain.png';
import Cloud from './../Images/cloudy.png';
import Sunny from './../Images/sunny.png';

export default class Weather extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            location: "",
            weather: [],
            images: ""
        }
    }

    onChangeInput = (event) => {
        console.log(event.target.value);
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    getWeather = () => {
        axios.post('http://localhost:8080/get/', null, {
            params: {
                "location": this.state.location,
            }
        }).then(response => {
            this.setState({
                weather: response.data
            })
            var image = [];
            this.state.weather.map(w => {
                if (w.condition === "sunny")
                    image.push(Sunny);
                else if (w.condition === "rainy")
                    image.push(Rain);
                else if (w.condition === "cloudy")
                    image.push(Cloud);
            });
            this.setState({
                images: image
            });
            console.log(this.state.weather);
        });
    }


    render() {

        return (
            <React.Fragment>
                <TextField
                    name="location"
                    id="standard-basic"
                    label="Standard"
                    margin="normal"
                    onChange={this.onChangeInput}
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={this.getWeather}
                >
                    Send
                </Button>

                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Temperature</TableCell>
                            <TableCell align="center">Condition</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.weather.map((w, index) =>
                            <TableRow>
                                <TableCell align="center">{w.temperature}</TableCell>
                                <TableCell align="center">{w.condition}</TableCell>
                                <TableCell align="center"><img src={this.state.images[index]}></img></TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </React.Fragment>
        );
    }

}