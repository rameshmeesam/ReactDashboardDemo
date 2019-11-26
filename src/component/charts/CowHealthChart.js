import React from "react";
import ReactDOM from "react-dom";
import Chart from "react-google-charts";
import ChartHeading from "../dashboard/ChartHeading";

const data = [
  ["Task", "Hours per Day"],
  ["test1", 11],
  ["test2", 2],
  ["test3", 2],
  ["test4", 2],
  ["test6", 7] // CSS-style declaration
];
const options = {
  title: "Chart 1",
  pieHole: 0.4,
  is3D: false
};
export default class App extends React.Component {
  render() {
    return (
      <div className="chart-box">
        <ChartHeading />
        <Chart chartType="PieChart" data={data} options={options} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
