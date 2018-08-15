import React, { Component } from 'react';
import { Sparklines, SparklinesLine, SparklinesSpots } from 'react-sparklines';
import './Graph.css';

class Graph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sampleData: [29, 32, 30, 27, 25, 31, 35]
    };
  }
  render() {
    return (
      <div className="graph-container">
        <div className="graph-info">
          <span>Temperature variation</span>
        </div>
        <div className="graph">
          <Sparklines data={this.state.sampleData}>
            <SparklinesLine color="#5c8218" />
            <SparklinesSpots style={{ fill: "#ffffff" }} />
          </Sparklines>
        </div>
      </div>
    );
  }
}

export default Graph;