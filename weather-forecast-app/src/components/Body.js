import React from 'react';
import Grid from '@material-ui/core/Grid';
import WeatherForecast from './WeatherForecast'

export default function CenteredGrid() {

  return (
    <div>
      <Grid style={{textAlign: "center"}} container spacing={2}>
        <Grid item md={2} xs={1}>
        </Grid>
        <Grid item md={8} xs={10}>
          <WeatherForecast></WeatherForecast>
        </Grid>
        
      </Grid>
    </div>
  );
}
