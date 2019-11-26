import React from "react";
import ReactDOM from "react-dom";
import Chart from "react-google-charts";
import ChartHeading from "../dashboard/ChartHeading";
// Ref : https://developers.google.com/chart/interactive/docs/gallery/histogram

const data = [
  ["Year", "Sales", "Expenses"],
  ["2004", 1000, 400],
  ["2005", 1170, 460],
  ["2006", 660, 1120],
  ["2007", 1030, 540]
];
const options = {
  title: "Farm Performance",
  curveType: "function",
  legend: { position: "bottom" }
};
export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <ChartHeading />
        <Chart chartType="LineChart" data={data} options={options} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
