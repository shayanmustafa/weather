import React, { Component } from 'react';
import Navbar from '../Navbar';
import Current from '../Current';
import Forecast from '../Forecast';
import Graph from '../Graph';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      unit: 'C',
      queryString: ''
    };
  }
  onUnitChange = (newUnit) => {
    this.setState({
      unit: newUnit
    }, this.fetchWithStateChange)
  }
  fetchWithStateChange = () => {
    // Fetch data for new unit
  }
  render() {
    return (
      <div className="app-container">
        <div className="app-nav">
          <Navbar changeUnit={this.onUnitChange} unit={this.state.unit} />
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