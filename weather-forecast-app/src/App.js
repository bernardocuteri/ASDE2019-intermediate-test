import React from 'react';
import logo from './logo.svg';
import './App.css';
import Bar from './Components/Bar';
import Weather from './Components/Weather';
import { CssBaseline } from '@material-ui/core'

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Bar />
      <Weather />

    </React.Fragment>
  );
}

export default App;
