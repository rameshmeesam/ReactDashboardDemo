import React from "react";
import ReactDOM from "react-dom";
import Chart from "react-google-charts";
import ChartHeading from "../dashboard/ChartHeading";

const data = [
  ["Task", "Hours per Day"],
  ["Good", 200],
  ["waste", 20]
  // CSS-style declaration
];
const options = {
  title: "Milk Status",
  pieHole: 0.5,
  is3D: false
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
