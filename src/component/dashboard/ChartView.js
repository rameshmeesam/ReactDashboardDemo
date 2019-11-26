import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ChartList from "./GetCharts";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  control: {
    padding: theme.spacing(2)
  }
}));

const chartData = {
  chartType: "PieChart",
  options: {
    title: "Product Status",
    pieHole: 0.4,
    is3D: false
  },
  data: [
    ["Task", "Hours per Day"],
    ["test1", 11],
    ["test1", 2],
    ["test1", 2],
    ["test1", 2],
    ["test1", 7] // CSS-style declaration
  ]
};

export default function SpacingGrid() {
  const [spacing] = React.useState(2);
  const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={spacing}>
          <ChartList />
        </Grid>
      </Grid>
    </Grid>
  );
}
