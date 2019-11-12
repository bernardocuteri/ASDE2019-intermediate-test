import React from 'react'
import Weather from './Weather'
import {CssBaseline, Grid} from '@material-ui/core'


export default class App extends React.Component
{
    render()
    {
        return (
            <div>
                <Grid container justify = "center">
                <h1>Weather Forecast</h1>
                </Grid>
                    <CssBaseline/>
                    <Weather/>
            </div>
        )
    }
}