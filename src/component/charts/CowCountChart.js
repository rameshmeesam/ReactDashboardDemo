import React from "react";
import ReactDOM from "react-dom";
import Chart from "react-google-charts";
import ChartHeading from "../dashboard/ChartHeading";

const data = [
  ["Task", "Hours per Day"],
  ["cattle", 11],
  ["buffalo", 2]
  // CSS-style declaration
];
const options = {
  title: "Count 1",
  pieHole: 0.4,
  is3D: true
};
export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <ChartHeading />
        <Chart chartType="PieChart" data={data} options={options} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
