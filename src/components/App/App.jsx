import React, { Component } from 'react';
import Navbar from '../Navbar';
import Current from '../Current';
import Forecast from '../Forecast';
import Graph from '../Graph';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      unit: 'C',
      queryString: '',
      latLng: [],
      navbarData: {},
      todayComponentData: {},
      listComponentData: [],
      graphComponentData: []
    };
  }

  onUnitChange = (newUnit) => {
    this.setState({
      unit: newUnit
    }, this.fetchWithStateChange)
  }

  onSearch = (query) => {
    this.setState({
      queryString: query
    }, this.fetchWithStateChange)
  }

  componentDidMount() {
    const geolocation = navigator.geolocation;
    if (geolocation) {
      const permissionGranted = (position) => {
        this.setState({
          latLng: [position.coords.latitude, position.coords.longitude]
        }, this.fetchWithStateChange);
      }
      const permissionDenied = () => {
        console.log('Permission Denied');
      }
      geolocation.getCurrentPosition(permissionGranted, permissionDenied);
    } else {
      console.log('GeoLocation not supported in your browser.');
    }
  }

  fetchWithStateChange = () => {
    
  }
  
  render() {
    return (
      <div className="app-container">
        <div className="app-nav">
          <Navbar changeUnit={this.onUnitChange} unit={this.state.unit} searchLocation={this.onSearch}/>
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