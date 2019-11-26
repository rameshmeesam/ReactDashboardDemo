import React from "react";
import ChartHeader from "./ChartHeading";

export default class ChartFlipContainer extends React.Component {
  render() {
    return (
      <div className="chart-container">
        <ChartHeader flipButton={this.props.flipButton} />
        <div style={{ height: "200px" }}>
          <label>Here will come chart info</label>
        </div>
      </div>
    );
  }
}
