import React from 'react';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline'
import ForecastApp from './components/ForecastApp';

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <ForecastApp />
    </React.Fragment>
  );
}

export default App;
