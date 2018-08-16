import React, { Component } from 'react';
import './Navbar.css';
import Search from '../Search';
import Unit from '../Unit';

class Navbar extends React.Component {
  LiftUnitToApp = (newUnit) => {
    this.props.changeUnit(newUnit);
  }
  
  render() {
    return (
      <nav>
        <ul className="navbar-container">
          <li className="navbar-list-item">
            <Search />
            <Unit unit={this.props.unit} liftUnit={this.LiftUnitToApp}/>
          </li>
          <li className="navbar-list-item">
          <div className="date-container">
          <div>Friday</div>
          <div>May 04, 2018</div>
        </div>
          </li>
          <li className="navbar-list-item city-name">
            <span className="">Today in New York, US</span>
          </li>
        </ul>
      </nav>
    );
  }
}
export default Navbar;