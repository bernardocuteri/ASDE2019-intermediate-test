import React from 'react';
import WeatherForecast from './components/WeatherForecast'
import CssBaseline from '@material-ui/core/CssBaseline'
import './App.css';

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <WeatherForecast />
    </React.Fragment>
  );
}

export default App;