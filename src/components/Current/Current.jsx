import React, { Component } from 'react';
import './Current.css';
import { getIconClassName } from '../../utils/utils';

class Current extends Component {

  render() {
    const weatherId = 300;
    const iconClass = getIconClassName(weatherId);
    const windSpeedUnit = 'm/s';

    return (
      <div className="current-component-container">
        <div className="weather-icon-container">
        <div className="weather-desc">Heavy Rain</div>
          <div className="icon-conatainer">
            <i className={`wi wi-owm-${weatherId} weather-icon ${iconClass}`} ></i>
          </div>          
        </div>

        <div className="temp-container">
          <div className="temp-text">
            <span>24</span>
            <i className="wi wi-degrees"></i>
            <span>C</span>
          </div>
          <div className="high-low-container">
            <div className="high-low-item">
              <span>
                <i className="wi wi-direction-up" ></i>
              </span>
              <span>
                <span>28&#x00B0;C</span>
              </span>
            </div>
            <div className="high-low-item">
              <span>
                <i className="wi wi-direction-down" ></i>
              </span>
              <span>
                <span>18&#x00B0;C</span>
              </span>
            </div>
          </div>
        </div>
        
        <div className="extra-info-container">
          <div className="extra-info-item">
            <span>Humidity</span>
            <span><i className="wi wi-humidity"></i></span>            
            <span>34%</span>
          </div>
          <div className="extra-info-item">
            <span>Pressure</span>
            <span><i className="wi wi-barometer"></i></span>            
            <span>34 hPa</span>
          </div>
          <div className="extra-info-item">
            <span>Wind Speed</span>
            <span><i className="wi wi-strong-wind"></i></span>            
            <span>10 {windSpeedUnit}</span>
        </div>
        </div>
        <div className="cloud-info-container">
        <div className="cloud-info">
          <span>Sunset</span>
          <span><i className="wi wi-sunset"></i></span>
          <span>7:15 pm</span>
        </div>
        <div className="cloud-info">
          <span>Sunrise</span>
          <span><i className="wi wi-sunrise"></i></span>          
          <span>6:00 am</span>
        </div>
        <div className="cloud-info">
          <span>Cloud percentage</span>
          <span><i className="wi wi-cloud"></i></span>          
          <span>47%</span>
        </div>
    </div>
      </div>
    );
  }
}

export default Current;