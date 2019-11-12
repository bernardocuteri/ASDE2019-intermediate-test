import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline'
import Bar from './components/Bar'
import WeatherForecast from './components/WeatherForecast'
import './App.css';

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Bar />
      <WeatherForecast />
    </React.Fragment>
  );
}

export default App;
