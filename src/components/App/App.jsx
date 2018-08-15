import React, { Component } from 'react';
import Navbar from '../Navbar';
import Current from '../Current';
import Forecast from '../Forecast';
import Graph from '../Graph';

class App extends React.Component {
  render() {
    return (
      <div className="app-container">
        <div className="app-nav">
          <Navbar />
        </div>
        <div className="app-current">
          <Current />
        </div>
        <div className="app-forecast-visualized">
          <Forecast />
          <Graph />
        </div>
      </div>
    );
  }
}

export default App;