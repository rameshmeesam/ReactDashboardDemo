import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import ChartContainer from "./ChartContainer";
import ChartFlipContainer from "./ChartFlipContainer";

export default function CardFlip(props) {
  const [isFlipped, setFlipped] = React.useState(false);

  const handleClick = e => {
    e.preventDefault();
    console.log("Inside flip click ");
    isFlipped ? setFlipped(false) : setFlipped(true);
  };

  return (
    <ReactCardFlip
      isFlipped={isFlipped}
      flipSpeedFrontToBack={props.flipSpeedFrontToBack}
      flipSpeedBackToFront={props.flipSpeedBackToFront}
      flipDirection="vertical"
    >
      <ChartContainer
        chartType={props.chartType}
        data={props.data}
        options={props.options}
        flipButton={handleClick}
        isFlipped={isFlipped}
      />
      <ChartFlipContainer flipButton={handleClick} />
    </ReactCardFlip>
  );
}
