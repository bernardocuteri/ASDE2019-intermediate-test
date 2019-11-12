import React from 'react';
import Grid from '@material-ui/core/Grid'
import { Card, CardContent } from '@material-ui/core';


export default class WeatherForecastPanel extends React.Component {

    render() {
        return (
            <div>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <Card>
                            <CardContent>{this.props.temperatureSlots[0]}</CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card>
                            <CardContent>{this.props.temperatureSlots[1]}</CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card>
                            <CardContent>{this.props.temperatureSlots[2]}</CardContent>
                        </Card>
                    </Grid>
                </Grid>
                
            </div>
        )
    }
}