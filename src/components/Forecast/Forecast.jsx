import React, { Component } from 'react';
import './Forecast.css';
import { getIconClassName } from '../../utils/utils';

const SingleListItem = (props) => {
  const weatherId = 200;
  const iconClass = getIconClassName(weatherId);

  return (
    <div className="single-forecast-item">
      <div className="forecast-info-container">
        <div className="forecast-day">
          {props.day}
          <span>, Aug 10</span>
        </div>
        <div className="forecast-desc">Sky is clear</div>
      </div>
      <div className="forecast-weather-icon">
        <i className={`wi wi-owm-${weatherId} ${iconClass}`}></i>
      </div>
      <span className="forecast-temp-text">24&#x00B0;</span>
    </div>
  );
}

class Forecast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri']
    };
  }
  render() {
    const items = this.state.data.map(day => (<SingleListItem key={day} day={day} />))
    return (
      <div>
        <h3 className="forecast">Next six days</h3>
      <div className="forecast-container">
        {items}
      </div>
      </div>
    );
  }
}

export default Forecast;