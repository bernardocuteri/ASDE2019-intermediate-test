import React from 'react';
import Grid from '@material-ui/core/Grid'
import { Card, CardContent } from '@material-ui/core';


export default class WeatherForecastPanel extends React.Component {

    render() {
        var first = "/" + this.props.weatherValueSlots[0] + ".png"
        var second = "/" + this.props.weatherValueSlots[1] + ".png"
        var third = "/" + this.props.weatherValueSlots[2] + ".png"
        console.log(first)
        return (
            <div>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <Card>
                            <img src={first} alt="" />
                            <CardContent>{this.props.weatherValueSlots[0]}</CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card>
                            <img src={second} alt="" />
                            <CardContent>{this.props.weatherValueSlots[1]}</CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card>
                            <img src={third} alt="" />
                            <CardContent>{this.props.weatherValueSlots[2]}</CardContent>
                        </Card>
                    </Grid>
                </Grid>
                
            </div>
        )
    }
}