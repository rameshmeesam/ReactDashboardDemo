import React from "react";
import ReactDOM from "react-dom";
import Chart from "react-google-charts";
import ChartHeading from "../dashboard/ChartHeading";

const data = [
  ["Year", "Production 2019", { role: "style" }],
  ["Jan", 10, "color: gray"],
  ["Feb", 14, "color: #76A7FA"],
  ["March", 16, "color: blue"],
  ["April", 22, "stroke-color: #703593; stroke-width: 4; fill-color: #C5A5CF"],
  [
    "2050",
    28,
    "stroke-color: #871B47; stroke-opacity: 0.6; stroke-width: 8; fill-color: #BC5679; fill-opacity: 0.2"
  ]
];
export default class App extends React.Component {
  render() {
    return (
      <div>
        <ChartHeading />
        <Chart chartType="BarChart" data={data} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
