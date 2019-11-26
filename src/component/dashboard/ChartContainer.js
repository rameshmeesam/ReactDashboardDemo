import React from "react";
import ChartHeader from "./ChartHeading";
import Chart from "react-google-charts";

export default class ChartContainer extends React.Component {
  render() {
    return (
      <div className="chart-container">
        <ChartHeader
          data={this.props.data}
          chartType={this.props.chartType}
          options={this.props.options}
          flipButton={this.props.flipButton}
          isFlipped={this.props.isFlipped}
        />
        <Chart
          chartType={this.props.chartType}
          data={this.props.data}
          options={this.props.options}
        />
      </div>
    );
  }
}
