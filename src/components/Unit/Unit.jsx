import React, { Component } from 'react';
import './Unit.css'

class Unit extends React.Component {

    updateUnit = (e) => {
        const newUnit = e.target.textContent;
        this.props.liftUnit(newUnit)
    }

    render() {
        return (
            <div className="unit-container">
                <span className={`unit-value ${this.props.unit === 'C' ? 'active-unit' : ''}`} onClick={this.updateUnit}>C</span>
                <span className={`unit-value ${this.props.unit === 'F' ? 'active-unit' : ''}`} onClick={this.updateUnit}>F</span>
            </div>
        );
    }
}

export default Unit;