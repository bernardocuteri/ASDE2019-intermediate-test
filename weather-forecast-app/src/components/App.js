import React from 'react';
import WeatherForecast from './WeatherForecast'
import './App.css';
import { CssBaseline } from '@material-ui/core'

function App() {
  return (
    <div>
      <CssBaseline />
      <WeatherForecast />
    </div>
  );
}

export default App;
