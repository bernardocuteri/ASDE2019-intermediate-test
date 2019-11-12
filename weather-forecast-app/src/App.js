import React from 'react';
import './App.css';
import Weather from './components/Weather';
import CssBaseline from '@material-ui/core/CssBaseline'

function App() {
  return (

    <React.Fragment>
      <CssBaseline />
      <Weather></Weather>
    </React.Fragment>

    
  );
}

export default App;
