import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

class WeatherForecastDisplay extends Component {

    constructor(props) {
        super(props);
        this.state = {
            temperatures: props.temperatures,
            weather_values: props.weather_values
        }

        console.log(props);
    }

    render() {
        return (
            <Paper>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Tuday</TableCell>
                            <TableCell align="center">Tomorrow</TableCell>
                            <TableCell align="center">The Day After</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    </TableBody>
                </Table>
                <h1>{this.state.temperatures[0]}</h1>
            </Paper>
        );
    }
}

export default WeatherForecastDisplay;