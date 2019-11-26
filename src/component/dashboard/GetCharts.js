import React, { useState, useEffect } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import ChartContainer from "../dashboard/ChartContainer";
import ReactCardFlip from "react-card-flip";
import ChartFlipContainer from "../dashboard/ChartFlipContainer";
import CardFlip from "./CardFlip";

const useStyles = makeStyles(theme => ({
  paper: {
    margin: "auto",
    height: "100%",
    width: "100%",
    minWidth: 380
  }
}));

export default function ChartList() {
  const [charts, setCharts] = useState([]);
  const [load, setLoad] = useState(false);
  const [error, setError] = useState("");
  const classes = useStyles();

  useEffect(() => {
    axios
      .get("https://gn8vc.sse.codesandbox.io/dashboard")
      .then(res => {
        setCharts(res.data);
        console.log("got some responce" + res.data);
        setLoad(true);
      })
      .catch(err => {
        setError(err.message);
        setLoad(true);
      });
  }, []);

  if (load) {
    return charts.map((chart, index) => (
      <Grid key={index} item>
        <Paper className={classes.paper}>
          <CardFlip
            flipSpeedFrontToBack="1.5"
            flipSpeedBackToFront="1.5"
            flipDirection="vertical"
            chartType={chart.chartType}
            data={chart.data}
            options={chart.options}
          />
        </Paper>
      </Grid>
    ));
  } else {
    return <div>Loading...</div>;
  }
}
